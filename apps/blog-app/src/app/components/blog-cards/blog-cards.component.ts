import { Component, OnInit } from '@angular/core';
import {
  blogCategories,
  BlogCategoryType,
  PostInfoType,
  PostType,
} from '../../constants/blog-constants';
import { ApiService } from '@my-workspace/shared';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrl: './blog-cards.component.css',
})
export class BlogCardsComponent implements OnInit {
  public blogCategories: BlogCategoryType[] = [];
  public selectedCategory: number | string = '';
  public blogData: PostInfoType[] = [];
  public dataUrl = '/assets/db.json';
  public filteredBlogData: PostInfoType[] = [];

  constructor(private apiService: ApiService) {
    console.log('BlogCardsComponent constructor', blogCategories);
    this.blogCategories = blogCategories;
  }

  getBlogCategoryTitle(selection: number | string) {
    console.log('getBlogCategoryTitle', selection);
    this.selectedCategory = selection;
    const selectionTab =
      blogCategories?.find((item, index) => index === selection)?.title ?? '';
    this.filteredBlogData = this.blogData.filter((item) => item.category === selectionTab);
    console.log('selectionTab', { selectionTab, data: this.blogData });
  }

  trackByCategoryTitle(index: number, post: PostInfoType): string {
    return post.category;
  }

  ngOnInit(): void {
    this.apiService.getLocalData<PostType>(this.dataUrl).subscribe((data) => {
      console.log('data', data);
      this.blogData = data.posts;
      this.filteredBlogData = [...this.blogData];
    });
  }
}
