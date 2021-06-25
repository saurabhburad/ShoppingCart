import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BuyClothShoppingComponent } from './buy-cloth-shopping/buy-cloth-shopping.component';


const ChildRoutes: Routes = [
  {
    path: 'buyProducts',
    component: BuyClothShoppingComponent
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
export class BuyClothShoppingRoutingModule { }
