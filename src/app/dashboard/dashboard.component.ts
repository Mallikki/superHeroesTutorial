import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  //we provide the heroService to the component
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    //as soon as the component is initialized, we call the getHeroes method
    this.getHeroes();
  }

  /**
   * this method calls the getHeroes method of the heroService
   * we subscribe to the method to be notified when data are sent.
   * We wait for the observable to emit the array of heroes and subscribe
   * passed the emitted array to the callback, which will set the heroes property.
   */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
