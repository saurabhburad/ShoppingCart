import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddproductsComponent } from './addproducts/addproducts.component';


const ChildRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'addProduct',
    component: AddproductsComponent
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
export class adminShoppingRoutingModule { }
