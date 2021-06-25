import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDetailClothShoppingRoutingModule } from './products-details-cloth-shopping-routing.module';
import { ProductDetailsClothShoppingComponent } from './products-details-cloth-shopping/products-details-cloth-shopping.component';


@NgModule({
  imports: [
    ProductDetailClothShoppingRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ProductDetailsClothShoppingComponent]
})
export class ProductDetailClothShoppingModule { }
