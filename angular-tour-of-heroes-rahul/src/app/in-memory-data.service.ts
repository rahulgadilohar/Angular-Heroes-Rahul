import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [

      { id: 11, name: 'Kedarnath' },
      { id: 12, name: 'Badrinath' },
      { id: 13, name: 'Rameshwaram' },
      { id: 14, name: 'Mahakaleshwar' },
      { id: 15, name: 'Trimbakeshwar' },
      { id: 16, name: 'Ghrishneshwar' },
      { id: 17, name: 'Bhima Shankar' },
      { id: 18, name: 'Mallikarjuna' },
      { id: 19, name: 'Somnath' },
      { id: 20, name: 'OMkareshwar' }


      // { id: 11, name: 'Dr Nice' },
      // { id: 12, name: 'Narco' },
      // { id: 13, name: 'Bombasto' },
      // { id: 14, name: 'Celeritas' },
      // { id: 15, name: 'Magneta' },
      // { id: 16, name: 'RubberMan' },
      // { id: 17, name: 'Dynama' },
      // { id: 18, name: 'Dr IQ' },
      // { id: 19, name: 'Magma' },
      // { id: 20, name: 'Tornado' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}



