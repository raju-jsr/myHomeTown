import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { SectionCard } from '../section-card/section-card';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, SectionCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('myHomeTown');
}
