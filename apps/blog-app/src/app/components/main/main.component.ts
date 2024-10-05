import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardsComponent } from '../blog-cards/blog-cards.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, BlogCardsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
