import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EMAILJS } from '../../emailjs.config';

type Campo = 'nome' | 'email' | 'mensagem';
type Estado = 'parado' | 'enviando' | 'enviado' | 'erro';

const MENSAGENS: Record<Campo, string> = {
  nome: 'Como posso te chamar?',
  email: 'Esse e-mail parece incompleto. Confira o @ e o final, como .com.',
  mensagem: 'Escreva ao menos uma frase para eu entender o que você precisa.',
};

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  private fb = inject(FormBuilder);

  estado = signal<Estado>('parado');
  tentou = signal(false);

  form = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
    site: [''], // isca para robôs: pessoas não veem nem preenchem
  });

  /** Devolve a mensagem de erro só depois que a pessoa mexeu no campo ou tentou enviar. */
  erro(campo: Campo): string | null {
    const c = this.form.controls[campo];
    if (c.valid || !(c.touched || this.tentou())) return null;
    return MENSAGENS[campo];
  }

  async enviar() {
    this.tentou.set(true);

    const primeiroInvalido = (['nome', 'email', 'mensagem'] as const).find(
      (c) => this.form.controls[c].invalid,
    );
    if (primeiroInvalido) {
      document.getElementById('campo-' + primeiroInvalido)?.focus();
      return;
    }

    const v = this.form.getRawValue();

    // Se a isca veio preenchida, é robô: finge que deu certo e não envia nada.
    if (v.site) {
      this.estado.set('enviado');
      return;
    }

    this.estado.set('enviando');
    try {
      const resposta = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS.serviceId,
          template_id: EMAILJS.templateId,
          user_id: EMAILJS.publicKey,
          template_params: {
            from_name: v.nome,
            reply_to: v.email,
            message: v.mensagem,
          },
        }),
      });
      if (!resposta.ok) throw new Error(await resposta.text());

      this.form.reset();
      this.tentou.set(false);
      this.estado.set('enviado');
    } catch {
      this.estado.set('erro');
    }
  }

  novaMensagem() {
    this.estado.set('parado');
  }
}