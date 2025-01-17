import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '@my-workspace/shared';
import { CartService } from '../../services/cart-service/cart.service';
import { TotalCartType, StoreItemType } from '../../types/store';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit, OnDestroy {
  public cartItemsSubscription!: Subscription;
  public isOpen = false;
  public cartInfo: TotalCartType = { list: [], totalToPay: 0 };
  public totalToPay = 0;
  public selectedMovies: StoreItemType[] | undefined;
  public cartHasTickets = false;

  constructor(
    private cartService: CartService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  calculateTotal(): number {
    return this.cartInfo.list.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }
  ngOnInit() {
    this.cartItemsSubscription = this.cartService.cart$.subscribe((cart) => {
      this.isOpen = cart.isOpen ?? false;
      this.cartInfo = { list: cart.list, totalToPay: cart.totalToPay };
      this.totalToPay = this.calculateTotal();
      this.selectedMovies = cart.list.filter((item) => item.type === 'ticket');
      this.handleCartHasTickets();
    });
  }

  toggleSideNav() {
    this.cartService.openCartDetails(!this.isOpen);
  }

  handleCartHasTickets() {
    this.cartHasTickets = this.cartInfo.list.some(
      (item) => item.type === 'ticket'
    );
  }

  handleClearCart() {
    this.cartService.clearCart();
  }

  handleClearTickets() {
    this.cartService.clearTickets();
    this.router.navigate(['/tickets']);
  }

  handleCheckout() {
    this.dialog.open(ModalDialogComponent, {
      width: '400px',

      data: {
        title: 'Checkout',
        content: this.cartInfo.list,
        message: 'Are you sure you want to checkout?',
        actions: [
          {
            text: 'Yes, Pay: $' + this.totalToPay,
            handler: () => {
              this.handleClearCart();
              this.router.navigate(['/home']);
              this.dialog.closeAll();
            },
          },
          {
            text: 'No',
            handler: () => {return},
          },
        ],
      },
    });
  }

  ngOnDestroy() {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();
    }
  }
}
