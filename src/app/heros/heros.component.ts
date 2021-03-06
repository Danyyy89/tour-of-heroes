import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes: Hero[];

  /* No more need of these lines with the router
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  } */

  // Without Observable in hero.service.ts
  /*getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  } */

  // With Observable in hero.service.ts
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
   }

}
