import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  nombre: string = 'IronMan';
  edad: number = 45;

  get capitalizedName():string{
    return this.nombre.toUpperCase();
  }

  getHeroDescription(){
    return  `${this.nombre} - ${this.edad}`;
  }

  changeHero(){
    this.nombre = 'Spiderman';
  }

  changeEdad(){
    this.edad = 25;
  }

  resetForm(){
    this.nombre = 'IronMan';
    this.edad = 45;
  }

}
