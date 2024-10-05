import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {} 

  navigateTo(route: string, id?: string | number): void {
    if (!route) {
      console.warn('Route is not defined');
      return;
    }

    if (id) {
      this.router.navigate([`/${route}/${id}`]);
    } else {
      this.router.navigate([`/${route}`]);
    }
  }
}
