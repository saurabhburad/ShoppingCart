import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-cloth-shopping-component',
  templateUrl: './app-header-cloth-shopping.component.html',
  styleUrls: ['./app-header-cloth-shopping.component.css']
})
export class AppHeaderClothShoppingComponent{

  constructor(private router: Router){}

 
//navigate user to all products page
openProductsSection() {
  this.router.navigate(['/product/search']);
}

openShoppingCartDetails(){
  this.router.navigate(['/cartDetails/shoppingCart']);
}

openAboutPage(){
  this.router.navigate(['/aboutPage/about']);
}

openAdminPage(){
  this.router.navigate(['/adminPage/admin']);
}

shoppingMenuToggle(){

}

}
