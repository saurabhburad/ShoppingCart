import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AppHeaderClothShoppingComponent } from './components/header/app-header-cloth-shopping.component';
import { AppFooterClothShoppingComponent } from './components/footer/app-footer-cloth-shopping.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppHeaderClothShoppingComponent,
    AppFooterClothShoppingComponent
 
  ],
  exports: [
    AppHeaderClothShoppingComponent,
    AppFooterClothShoppingComponent
  ],
  providers: [
  
  ],
  entryComponents: [
   
  ]
})
export class CommonClothShoppingModule { }
