import { Component } from '@angular/core';
import {Observable, map, interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time$: Observable<Date>;
  title = 'midterm';
  presentDate = new Date();
  constructor() {
    this.time$ = interval(1000).pipe(map(()=> new Date()))
  }
  myName = "Rolyn Joyce";

  jeep: number = 15;
  jeepDollar: number = 0.27;
  pesos: number = 56.017;
  dollar: number = 1;

  data: object = {
    name:"Rols", age:20, address:"Mabalacat City",
    perfume:[
      {pname: 'Lattafa',price:'Abot Kaya'},
      {pname: 'Afnan',price:'Pwede Na'},
      {pname: 'Tom Ford',price:'Mahal Beh'}
    ]
  }

  a: number = 0.69;
  b: number = 0.25;
  c: number = 0.50;

  Color = ['Green','Red','Blue','Black','White'];
}