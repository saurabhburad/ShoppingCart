import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { adminShoppingRoutingModule } from './admin-shopping-routing.module';
import { AdminComponent } from './admin.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

@NgModule({
  imports: [
    adminShoppingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [AdminComponent, AddproductsComponent]
})
export class adminClothShoppingModule { }
