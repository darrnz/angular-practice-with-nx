import { Component, OnInit } from '@angular/core';
import { moviesTimesheet } from 'apps/cinema-app/src/assets/db-mock/timesheet';
import { Subject, takeUntil } from 'rxjs';
import { ApiServiceService } from '../../services/movie-service/api-service.service';
import { IMovies } from '../../types/movies';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  private unsuscribe$ = new Subject<void>();
  movies: IMovies[] = [];
  movieTimeSheet: any[] = moviesTimesheet;
  constructor(private apiServiceService: ApiServiceService) {}

  ngOnInit() {
    this.apiServiceService
      .getMovies()
      .pipe(takeUntil(this.unsuscribe$))
      .subscribe({
        next: (movies) => {
          const { results } = movies;
          this.movies = results.slice(0, 10).map((movie: any, i: number) => {
            return {
              image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
              title: movie.title,
              release: movie.release_date,
              id: movie.id,
              overview: movie.overview,
              originalLanguage: movie.original_language,
              voteAverage: movie.vote_average,
              timesheet: this.movieTimeSheet[i].showtimes ?? [],
            };
          });
        },
      });
  }

  ngOnDestroy() {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }
}
