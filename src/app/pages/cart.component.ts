import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductsDetailsComponent } from './products-details.component';
import { CartService } from '../cart.service';

@Component({
  template: `
    <div class="container">
      <h1>Articoli</h1>
    <ng-container *ngIf="carrello.length > 0; else zeroProd">
      <ul class="list-group container">
        <li *ngFor="let item of carrello" class="list-group-item border p-2 d-flex justify-content-between">
          <span>{{item.name}}</span>
          <span class="bg-primary text-white p-1 ps-2 pe-2 prezzo"><strong>{{item.price}} €</strong></span>
        </li>
      </ul>
    </ng-container>
      <hr />

      <ng-template #zeroProd>
        <h2>Carrello vuoto!</h2>
      </ng-template>
      <h1 class="mt-3">Completa Ordine</h1>
      <form (ngSubmit)="submit(f)" #f="ngForm">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            type="text"
            ngModel
            name="nome"
            class="form-control m-1"
            id="nome"
          />
        </div>
        <div class="form-group">
          <label for="indirizzo">Indirizzo</label>
          <input
            type="text"
            ngModel
            name="indirizzo"
            class="form-control m-1"
            id="indirizzo"
          />
        </div>
        <button type="submit" class="btn btn-primary m-1">Submit</button>
      </form>
    </div>
  `,
  styles: [
    `
    .prezzo {
      border-radius: 40%;
    }
    `
  ],
})
export class CartComponent implements OnInit {
  constructor(private dettagli: ProductsDetailsComponent, public cartSrv: CartService) {}

  carrello!: Product[];

  submit(form: any) {
    console.log("Ordine inviato con successo!", form.value);
    form.reset();
    this.cartSrv.svuota();
    this.carrello = this.cartSrv.getCarrello();
  }

  ngOnInit(): void {
    this.carrello = this.cartSrv.getCarrello();
    console.log(this.dettagli);
  }
}
