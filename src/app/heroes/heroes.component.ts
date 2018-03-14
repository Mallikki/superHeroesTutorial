import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  //on attend que l'observable émette une array d'héros. Subscribe passe ensuite l'array émise au callback,
  // qui va set le composent "heroes"
}
