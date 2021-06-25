import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartClothShoppingRoutingModule } from './cart-cloth-shopping-routing.module';
import { CartClothShoppingComponent } from './cart-cloth-shopping/cart-cloth-shopping.component';

@NgModule({
  imports: [
    CartClothShoppingRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [CartClothShoppingComponent]
})
export class CartClothShoppingModule { }
