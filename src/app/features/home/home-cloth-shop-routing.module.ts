import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeClothShopComponent } from './home-cloth-shop/home-cloth-shop.component';


const ChildRoutes: Routes = [
  {
    path: '',
    component: HomeClothShopComponent
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
export class HomeClothShopRoutingModule { }
