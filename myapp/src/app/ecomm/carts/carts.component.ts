import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  productQuantity;

  @Output()
  productAdded = new EventEmitter<{
    name: String, 
    quantity: number, 
    status: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddProduct(
    productNameInput: HTMLInputElement, 
    ){
      var product = {
        name: productNameInput.value,
        quantity: this.productQuantity,
        status: this.productQuantity>0 ? "InStock":"OutOfStock",
      };

      console.log(product);
      this.productAdded.emit(product);
  }

}
