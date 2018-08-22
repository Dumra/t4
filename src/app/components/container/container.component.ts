import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }
  counterArray: any[];

  ngOnInit() {
    this.counterArray = [];
  }

  handleCounter(digit: number) {
    if (digit % 2 == 0) {
      this.counterArray.push({ number: digit, isEven: true});
    } else {
      this.counterArray.push({ number: digit, isEven: false});
    }
  }

  clearGame(isClear: boolean) {
    this.counterArray = [];
  }

}
