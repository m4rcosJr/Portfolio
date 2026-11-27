import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  secoes = [
    { id: 'sobre', nome: 'Sobre', soDesktop: false },
    { id: 'tecnologias', nome: 'Tecnologias', soDesktop: true },
    { id: 'projetos', nome: 'Projetos', soDesktop: false },
    { id: 'contato', nome: 'Contato', soDesktop: false },
  ];
  ativa = signal('');

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entradas) => {
          for (const e of entradas) {
            if (e.isIntersecting) this.ativa.set(e.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const id of ['inicio', ...this.secoes.map((s) => s.id)]) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }

      // No fim da página, a última seção é curta e pode não cruzar o centro da tela
      const noFim = () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
          this.ativa.set('contato');
        }
      };
      window.addEventListener('scroll', noFim, { passive: true });

      destroyRef.onDestroy(() => {
        observer.disconnect();
        window.removeEventListener('scroll', noFim);
      });
    });
  }
}