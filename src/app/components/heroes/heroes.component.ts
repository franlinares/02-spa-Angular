import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  // heroesServi es el alias que tiene esta pagina para HeroesService
  constructor(private heroesServi: HeroesService, private router: Router) { }

  ngOnInit(): void {

    this.heroes = this.heroesServi.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(idx: number): void{
    this.router.navigate(['/heroe', idx]);
  }
}
