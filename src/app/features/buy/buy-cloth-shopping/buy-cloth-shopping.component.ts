import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-cloth-shop',
  templateUrl: './buy-cloth-shopping.component.html',
  styleUrls: ['./buy-cloth-shopping.component.css']
})
export class BuyClothShoppingComponent implements OnInit{
  finalItemsForOrder;
  orderPlaced = false;
  public sumTotal = 0;
  placeOrderForm: FormGroup;
  constructor(private router: Router,
    public formBuilder: FormBuilder){
    //this.finalItemsForOrder =  this.router.getCurrentNavigation().extras.state.totalItemsInOrder;

    this.finalItemsForOrder =  JSON.parse(localStorage.getItem('cartObject'));
    if(this.finalItemsForOrder){
     for(let i=0;i<this.finalItemsForOrder.length;i++) {
      this.sumTotal = this.sumTotal + (this.finalItemsForOrder[i].price * this.finalItemsForOrder[i].productQuantities);

     }

    }
  }

   // intialzing form with angular form applying validation on inputs
   ngOnInit(): void {
    this.placeOrderForm = this.formBuilder.group({
      userFirstName: ['', [Validators.required,Validators.minLength(4)]],
      userLastName: ['', [Validators.required,Validators.minLength(4)]],
      userEmailAddress: ['', [Validators.required]],
      userContactNumber: ['', [Validators.required,Validators.min(1000000), Validators.max(9999999999)]],
      userAddress: ['', [Validators.required]],
    })  
  }

   // navigating user to confirmation screen when user click book appointment
   confirmOrder() {
    this.orderPlaced = true;

  }

}