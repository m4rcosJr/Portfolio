import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tecnologias',
  styleUrl: './tecnologias.css',
  templateUrl: './tecnologias.html',
})

export class Tecnologias {
  grupos = [
    { titulo: 'Back-end', itens: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'REST', 'Swagger'] },
    { titulo: 'Front-end', itens: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
    { titulo: 'Bancos de dados', itens: ['SQL Server', 'MySQL', 'Supabase'] },
    { titulo: 'Ferramentas', itens: ['Git', 'GitHub', 'Docker'] },
    { titulo: 'Fundamentos', itens: ['POO', 'SOLID', 'Scrum'] },
    { titulo: 'Estudando', itens: ['NoSQL', 'Kubernetes'] },
  ];
}
