import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //we retrieve the hero's id set in the route
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
    //then, the service is called to use the getHero method with the retrieved id
    // to obtain a hero's detail
  }

  goBack(): void {
    this.location.back();
    //we go back to the previous "page"
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
    //we call the updateHero method from the service and pass it the which detail we are retrieving hero.
    // we can update its name
    // then, we go back to the previous "page"
  }
}
