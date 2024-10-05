import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { blogCategories, BlogCategoryType } from '../../constants/blog-constants';

@Component({
  selector: 'app-blog-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-cards.component.html',
  styleUrl: './blog-cards.component.css',
})
export class BlogCardsComponent {
  public blogCategories: BlogCategoryType[]=[];

  constructor () {
    console.log('BlogCardsComponent constructor', blogCategories);
    this.blogCategories = blogCategories;

  }


}
