import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductClothShoppingComponent } from './products-cloth-shopping/products-cloth-shopping.component';


const ChildRoutes: Routes = [
  {
    path: 'search',
    component: ProductClothShoppingComponent
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
export class ProductClothShoppingRoutingModule { }
