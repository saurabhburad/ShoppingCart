import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuyClothShoppingRoutingModule } from './buy-cloth-shopping-routing.module';
import { BuyClothShoppingComponent } from './buy-cloth-shopping/buy-cloth-shopping.component';

@NgModule({
  imports: [
    BuyClothShoppingRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BuyClothShoppingComponent]
})
export class BuyClothShoppingModule { }
