import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/products';
import { CartService } from '../cart.service';

@Component({
  template: `
    <div class="container mt-4">
      <div *ngFor="let prodotto of prodotti; let i = index">
        <div class="card m-4" style="width: 25rem;">
          <div class="card-body">
            <h5 class="card-title">{{ prodotto.name }}</h5>
            <p class="card-text">
              {{prodotto.description}}
            </p>
            <a class="card-link" [routerLink]="['/product-details',prodotto.id]" routerLinkActive="active" >Dettagli</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ProductsComponent implements OnInit {
  constructor(private prodSrv: ProductService, public cartSrv: CartService) {}

  prodotti!: Product[];
  index!: Product;

  ngOnInit(): void {
    this.prodSrv.get().subscribe((result) => {
      this.prodotti = result;
    })}

  //this.cartSrv.getProducts();


}
