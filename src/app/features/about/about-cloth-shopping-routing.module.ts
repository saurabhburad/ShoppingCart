import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutClothShoppingComponent } from './about-cloth-shopping/about-cloth-shopping.component';


const ChildRoutes: Routes = [
  {
    path: 'about',
    component: AboutClothShoppingComponent
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
export class AboutClothShoppingRoutingModule { }
