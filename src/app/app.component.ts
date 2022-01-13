import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triangle';
  base: string;
  height: number;
  area: number;
  constructor(){
    this.base = '';
    this.height = 0;
    this.area = 0;
  }
  calcArea(): any{
    console.log(this.base);
    this.area = Number(this.base) * Number(this.height) /2;
    this.base='';
    this.height=0;
  }
}
