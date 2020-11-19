import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

heroes:any[]=[]

  constructor( private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService, 
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe ( params =>{
      console.log(params ['bus']);
      this.heroes = this._heroesService.buscarHeroes( params ['bus']);
      console.log( this.heroes );
    });
  }

}
