import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeClothShopRoutingModule } from './home-cloth-shop-routing.module';
import { HomeClothShopComponent } from './home-cloth-shop/home-cloth-shop.component';

@NgModule({
  imports: [
    HomeClothShopRoutingModule,
    CommonModule
  ],
  declarations: [HomeClothShopComponent]
})
export class HomeClothShopModule { }