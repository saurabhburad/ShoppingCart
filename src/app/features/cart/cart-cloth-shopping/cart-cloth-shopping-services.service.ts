import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartClothShoppingServicesService {

constructor() { }

addToCart(cartData) {

 console.log(cartData);

 //save data in local storage------------------------------------
 localStorage.setItem('cartObject', JSON.stringify(cartData)); 
 let cartProductsData =  JSON.parse(localStorage.getItem('cartObject'));
 return cartProductsData;
 }
 
}