import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartClothShoppingComponent } from './cart-cloth-shopping/cart-cloth-shopping.component';


const ChildRoutes: Routes = [
  {
    path: 'shoppingCart',
    component: CartClothShoppingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChildRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CartClothShoppingRoutingModule { }
