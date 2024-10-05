import { Component } from '@angular/core';
import { NavigationService } from '@my-workspace/shared';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  constructor(private navigationService: NavigationService) {}

  navigateToHome() {
    this.navigationService.navigateTo('/');
  }
}
