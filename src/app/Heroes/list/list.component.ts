import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName: string[] = ['Ironman','Spiderman','Hulk', 'Thor', 'Captain America'];
  public deletedHeroName?: string;
  deleteHero(){
    this.deletedHeroName = this.heroesName.pop();
  }

}
