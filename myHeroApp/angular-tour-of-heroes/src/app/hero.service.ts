import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './Mock-Heroes';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  constructor() { }
}
