import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddproductsdataService } from 'src/app/services/addproductsdata.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  bookingForm: FormGroup;
  productsDetails;

  constructor(private products: AddproductsdataService,
    public formBuilder: FormBuilder,
    private router: Router  ) {
  }

  // intialzing form with angular form applying validation on inputs
  ngOnInit(): void {
    this.getProduct();
  }
  navigate() {
  this.router.navigate(['/adminPage/addProduct']);
}

deleteRecord(id) {
  this.products.deleteProductsData(id).subscribe(res=>{
    this.getProduct();

    alert(res['message']);
  });
}

  getProduct() {
    this.products.getProductsData().subscribe(res=>{
      this.productsDetails = res
    });
  }


}
