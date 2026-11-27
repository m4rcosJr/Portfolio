import { Component, ElementRef, signal, viewChild } from '@angular/core';

interface Projeto {
  slug: string;
  nome: string;
  contexto: string;
  descricao: string;
  tecnologias: string[];
  full: string;
  largura: number;
  altura: number;
  url: string;
}

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  private dialog = viewChild.required<ElementRef<HTMLDialogElement>>('viewer');
  aberto = signal<Projeto | null>(null);

  projetos: Projeto[] = [
    {
      slug: 'shark-parts',
      nome: 'Shark Parts',
      contexto: 'Cliente real',
      descricao:
        'Landing page de peças premium para veículos importados. Tem catálogo, marcas atendidas, diferenciais, depoimentos e um formulário que envia a mensagem pelo WhatsApp. Foi migrada de SSR para SPA para rodar numa hospedagem mais simples.',
      tecnologias: ['React 19', 'TypeScript', 'TanStack Router', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
      full: 'images/projetos/shark-parts-full.webp',
      largura: 1280,
      altura: 3573,
      url: 'https://www.sharkpartsbr.com.br/',
    },
    {
      slug: 'freitasz',
      nome: 'Barbearia Freitasz',
      contexto: 'Para a barbearia do meu irmão',
      descricao:
        'Agendamento online para uma barbearia sem horários fixos: ele cadastra a disponibilidade dia a dia e a agenda pública atualiza. Cada agendamento confirmado vira um evento no Google Agenda dele. Tem painel administrativo com controle financeiro.',
      tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Google Calendar API'],
      full: 'images/projetos/freitasz-full.webp',
      largura: 1280,
      altura: 1616,
      url: 'https://barbeariafreitasz.vercel.app/',
    },
    {
      slug: 'coracao-animal',
      nome: 'Coração Animal',
      contexto: 'PIM III, UNIP',
      descricao:
        'Sistema web de uma ONG fictícia de adoção de cães e gatos. Tem portal de adoção com filtros, cadastro de animais, painel de adoções e doações com dados simulados e área administrativa. A API em ASP.NET Core tem 25 endpoints documentados no Swagger, e um recomendador em Python sugere animais.',
      tecnologias: ['C#', 'ASP.NET Core', 'SQL Server', 'Swagger', 'Python', 'JavaScript'],
      full: 'images/projetos/coracao-animal-full.webp',
      largura: 793,
      altura: 1983,
      url: 'https://coracao-pkzqbhzfiqlry.azurewebsites.net/',
    },
    {
      slug: 'pietra-doces',
      nome: 'Pietrà Doces',
      contexto: 'Freelance',
      descricao:
        'Site de uma confeitaria artesanal, com catálogo de brownies, fotos de cada produto, a história da marca e botões de compra.',
      tecnologias: ['TypeScript', 'TanStack Start', 'Vite'],
      full: 'images/projetos/pietra-doces-full.webp',
      largura: 1280,
      altura: 2376,
      url: 'https://pietra-sweet-dreams.vercel.app',
    },
  ];

  abrir(p: Projeto) {
    this.aberto.set(p);
    this.dialog().nativeElement.showModal();
  }

  fechar() {
    this.dialog().nativeElement.close();
  }

  aoFechar() {
    this.aberto.set(null);
  }

  aoClicarFora(ev: MouseEvent) {
    if (ev.target === this.dialog().nativeElement) this.fechar();
  }
}