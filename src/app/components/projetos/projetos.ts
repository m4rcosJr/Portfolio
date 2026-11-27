import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-projetos',
  styleUrl: './projetos.css',
  templateUrl: './projetos.html',
})
export class Projetos {
  projetos = [
    {
      nome: 'Freitas Barber',
      contexto: 'Para a barbearia do meu irmão',
      descricao:
        'Agendamento para uma barbearia sem horários fixos. O barbeiro cadastra a disponibilidade dia a dia e a agenda pública atualiza na hora. Cada agendamento confirmado cria um evento no Google Agenda dele. Inclui painel administrativo e controle de lucros e gastos.',
      tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Google Calendar API'],
      imagem: '',
      link: '',
      linkTexto: 'Ver projeto',
    },
    {
      nome: 'Shark Parts',
      contexto: 'Cliente real',
      descricao:
        'Landing page de peças automotivas com catálogo, marcas, depoimentos e formulário que abre o WhatsApp. Começou em SSR e virou SPA para rodar numa hospedagem mais simples.',
      tecnologias: ['React 19', 'TypeScript', 'TanStack Router', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
      imagem: '',
      link: '',
      linkTexto: 'Ver projeto',
    },
    {
      nome: 'Coração Animal',
      contexto: 'PIM III, UNIP',
      descricao:
        'Sistema web para uma ONG fictícia de adoção de cães e gatos. API em ASP.NET Core com 25 endpoints documentados no Swagger, banco SQL Server, painel administrativo e um recomendador em Python com scikit-learn.',
      tecnologias: ['C#', 'ASP.NET Core', 'SQL Server', 'Swagger', 'Python', 'JavaScript'],
      imagem: '',
      link: '',
      linkTexto: 'Ver repositório',
    },
    {
      nome: 'Pietra Doces',
      contexto: 'Freelance',
      descricao: 'Site de uma confeitaria, em produção na Vercel.',
      tecnologias: ['TypeScript', 'TanStack Start', 'Vite'],
      imagem: '',
      link: 'https://pietra-sweet-dreams.vercel.app',
      linkTexto: 'Ver site',
    },
  ];

  destaque = this.projetos[0];
  demais = this.projetos.slice(1);
}
