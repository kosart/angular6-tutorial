import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  
  constructor(
    private route: ActivatedRoute, // The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent
    private location: Location,
    private heroService: HeroService, // service for interacting with the browser
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    /*
      The route.snapshot is a static image of the route information shortly after the component was created.
      The paramMap is a dictionary of route parameter values extracted from the URL.
      Route parameters are always strings. The JavaScript (+) operator converts the string to a number.
    */
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
