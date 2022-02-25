import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
//import { CartComponent } from './pages/cart.component';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" [routerLink]="['/']" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="['carrello']" routerLinkActive="active">Carrello ({{cartSrv.contatore}})</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public cartSrv : CartService) { }
  // @Input() carrello!: number;
  ngOnInit(): void {
  }

}
