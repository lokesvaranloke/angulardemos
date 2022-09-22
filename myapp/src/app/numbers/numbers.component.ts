import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  showNumbers = true;
  numbers = [1,2,3,523,46,45,12,48,34,91];
  boxNumber=7;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(){
    this.showNumbers = !this.showNumbers;
  }

}
