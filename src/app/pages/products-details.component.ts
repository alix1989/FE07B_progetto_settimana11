import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/products';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Injectable } from '@angular/core'; // at top

@Component({
  template: `
    <div *ngIf="prod">
      <div class="container">
        <h1>Dettagli Prodotto</h1>
        <h2>{{ prod.name }}</h2>
        <h2>{{ prod.price }} €</h2>
        <p>{{ prod.description }}</p>
        <button class="btn btn-primary" (click)="aggiungi()">
          Aggiungi al carrello
        </button>
      </div>
    </div>
  `,
  styles: [],
})
@Injectable({
  providedIn: 'root', // just before your class
})
export class ProductsDetailsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private prodottoSrv: ProductService,
    public cartSrv: CartService
  ) {}

  prod!: Product;
  sub!: Subscription;
  arr: Product[] = [];
  //@Output() carrelloInc = new EventEmitter;

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
      const id = params['id'];
      this.prodottoSrv.getProduct(id).subscribe((response: Product) => {
        this.prod = response;
      });
    });
  }

  aggiungi() {
    this.cartSrv.inviaCarrello(this.arr, this.prod);
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}
