import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductClothShoppingRoutingModule } from './products-cloth-shopping-routing.module';
import { ProductClothShoppingComponent } from './products-cloth-shopping/products-cloth-shopping.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    ProductClothShoppingRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [ProductClothShoppingComponent]
})
export class ProductClothShoppingModule { }
