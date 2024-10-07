import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostInfoType, PostType } from '../../constants/blog-constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() post!: PostInfoType;
  constructor() {

    console.log('post', this.post)
  }
}
