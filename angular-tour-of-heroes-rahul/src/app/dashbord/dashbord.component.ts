import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  heroes: Hero[] = [];
  
  constructor(private heroservice: HeroService) { }

  ngOnInit() {
    this.getHeroes(); 
  }
 
  getHeroes(): void {
    this.heroservice.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  }
