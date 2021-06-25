import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsClothShoppingComponent } from './products-details-cloth-shopping/products-details-cloth-shopping.component';


const ChildRoutes: Routes = [
  {
    path: 'details',
    component: ProductDetailsClothShoppingComponent
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
export class ProductDetailClothShoppingRoutingModule { }
