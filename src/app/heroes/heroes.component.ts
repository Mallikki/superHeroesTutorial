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
  /*
  We wait for the observable to emit an array of heroes. Subscribe then passed the array to the callback,
  which will se the heroes variable.
   */

  delete(hero : Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  /* even if the component delegate the deletion to the service,
  it remains responsible for updating its own list of heroes.
  so the hero to delete is first removed from the heroes list.
  WE STILL HAVE TO SUBSCRIBE TO THE SERVICE!!!!!
  If we don't, the service won't send the delete request to the server.
  the Observable does nothing until something subscribes.
  */

  add(name:string):void{
    name = name.trim();
    if(!name){return;}
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {this.heroes.push(hero)}
      )};
  /* if we don't find a name, we won't add anything. That means the user clicked on the button without entering
  a string.
  if that's not the case, we add the name of the new Hero and we push it to the array of heroes*/
}
