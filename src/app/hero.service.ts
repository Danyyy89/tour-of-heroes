import { Injectable } from '@angular/core';

import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

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
    // TODO: send a message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // of emits a single value, in this case the array of heroes
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero with id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  // service-in-service scenario
  constructor(private messageService: MessageService) { }

}
