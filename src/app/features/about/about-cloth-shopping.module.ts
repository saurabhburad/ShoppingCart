import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutClothShoppingRoutingModule } from './about-cloth-shopping-routing.module';
import { AboutClothShoppingComponent } from './about-cloth-shopping/about-cloth-shopping.component';

@NgModule({
  imports: [
    AboutClothShoppingRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [AboutClothShoppingComponent]
})
export class AboutClothShoppingModule { }
