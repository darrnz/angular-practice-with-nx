import { Component, Input } from '@angular/core';
import { IMovies } from '../../types/movies';
import { NavigationService } from '@my-workspace/shared';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  constructor(private navigationService: NavigationService) { }

  goToMovieDetails(id: string | number) {
    this.navigationService.navigateTo('movie', id);
  }
  @Input() movieData: IMovies | undefined = undefined

  goToTickets() {
    this.navigationService.navigateTo('tickets');
  }
  
}
