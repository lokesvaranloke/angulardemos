import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ecommproduct',
  templateUrl: './ecommproduct.component.html',
  styleUrls: ['./ecommproduct.component.css']
})
export class EcommproductComponent implements OnInit {

  @Input()
  productElement: {
    name: string,
    quantity: number,
    status: string,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
