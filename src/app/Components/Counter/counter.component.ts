import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
      <h1>Hola Counter</h1>
      <h3>Counter: {{counter}}</h3>
      <button (click)="increase(1)">+1</button>
      <button (click)="reset()">Reset</button>
      <button (click)="increase(-1)">-1</button>
  `

})

export class CounterComponent {
  counter = 10;


  increase(value:number) {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }

}
