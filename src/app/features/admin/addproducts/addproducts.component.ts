import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddproductsdataService } from 'src/app/services/addproductsdata.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  bookingForm: FormGroup;

  constructor(private addProducts: AddproductsdataService,
    public formBuilder: FormBuilder,
    private router: Router  ) {

  }

  // intialzing form with angular form applying validation on inputs
  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      description: ['', [Validators.required]],
      productDetails: ['', [Validators.required]],
      rating: [, [Validators.required]],
      price: [, [Validators.required]],
      image1: ['', [Validators.required]],
      image2: ['', [Validators.required]],
      image3: ['', [Validators.required]],
      image4: ['', [Validators.required]],
      image5: ['', [Validators.required]],
    })
  }

  // navigating user to confirmation screen when user click book appointment
  confirmBooking() {
    this.addProducts.addProductsData(this.bookingForm.value).subscribe(res => {
      if (res) {
        alert(res['message'])
        this.bookingForm.reset()
        this.router.navigate(['/adminPage/admin']);
      }

    });

  }

}
