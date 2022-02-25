import { Injectable } from '@angular/core';
import { Product } from './models/products';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // questo funziona!!!!!!!!!!!!!!

  i: number = 0;
  carrello:Product[] =[]
  contatore:number = 0;
  constructor(public prodSrv : ProductService) { }

  inviaCarrello(arr:Product[], prod:Product){
    arr[this.i] = prod;
    this.i++;
    this.carrello.push(prod);
    console.log(this.carrello);
    //console.log(this.i);
    this.incrementaCarrello();
  }

  incrementaCarrello() {
    this.contatore++;
  }

  getCarrello() {
    return this.carrello
  }

  svuota() {
    this.carrello = [];
    this.contatore = 0;
  }

}

