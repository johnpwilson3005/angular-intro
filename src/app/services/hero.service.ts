import { Injectable } from '@angular/core';

import { HEROES } from '../mocks/mock-heroes';
import { HeroInterface } from '../interfaces/hero-interface';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() { }

  getHeroes(filter: string): HeroInterface[] {
    if (filter === 'all') { return HEROES; }
      return HEROES.filter( hero => {
        if (filter === 'hero') {
          return hero.hero;
        } else if (filter === 'villian' && !hero.hero) {
          return hero;
        }
      });
    }
  }
