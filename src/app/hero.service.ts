import { Injectable } from '@angular/core';

import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  /* Without Observable
  getHeroes(): Hero[] {
    return HEROES;
  }*/

  // With Observable
  getHeroes(): Observable<Hero[]> {
    // of emits a single value, in this case the array of heroes
    return of(HEROES);
  }

  constructor() { }

}
