import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Sobre } from './components/sobre/sobre';
import { Tecnologias } from './components/tecnologias/tecnologias';
import { Projetos } from './components/projetos/projetos';
import { Contato } from './components/contato/contato';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Sobre, Tecnologias, Projetos, Contato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
