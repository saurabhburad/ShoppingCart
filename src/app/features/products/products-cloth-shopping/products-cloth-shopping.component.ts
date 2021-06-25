import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddproductsdataService } from 'src/app/services/addproductsdata.service';
import { productsData } from './../../../data/products';
import { Observable } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-product-cloth-shop',
  templateUrl: './products-cloth-shopping.component.html',
  styleUrls: ['./products-cloth-shopping.component.css']
})
export class ProductClothShoppingComponent {
  public allProductsData;
  query
  listOfFilterFordisplay: any = ['Price - low to high', 'Price - high to low'];
  constructor(private router: Router,
    private addProducts: AddproductsdataService,
    ) {
      this.getAllProducts()
  }
  
  getAllProducts() {
    this.addProducts.getProductsData().subscribe(res => {
      this.allProductsData = res;
    })
  }

  // filter the result based on price low to high and hight tot low return the data
 changeFilterOptionByvalue(option) {
  if(option === this.listOfFilterFordisplay[0]) {
    let data  =  this.allProductsData.sort((lowProductPrice, highProductPrice) => lowProductPrice.price - highProductPrice.price);
    this.allProductsData = [...data]
  }
  if(option === this.listOfFilterFordisplay[1]) {
    let data  =  this.allProductsData.sort((lowProductPrice, highProductPrice) =>  highProductPrice.price - lowProductPrice.price);
    this.allProductsData = [...data]
  }
 }

  //navigate user to the product's details page
  openProductDetails(product) {
    this.router.navigate(['/productDetails/details'], { state: { currentProductData: product } });
  }

  
  // search filter when user search any specify word to search location
  // debounceTime(200), distinctUntilChanged() wait for 200mil second so that 
  //it does not second another request while user type another keyword and distinctUntilChanged ae sure wheather the change that is emited should be different
  // SearchA1.length < 1  check type word length greater that one
  // filter and slice and return 10 item with matching word
  searchListValue = (textSearchPipevalue$: Observable<string>) => textSearchPipevalue$.pipe(debounceTime(200), distinctUntilChanged(),
    map(SearchA1 => SearchA1.length < 1 ? []
      : this.allProductsData.filter(valueBindSearch => {
       return  valueBindSearch.description.toLowerCase().indexOf(SearchA1.toLowerCase()) > -1 || 
        valueBindSearch.description.toLowerCase().indexOf(SearchA1.toLowerCase()) > -1
      }).slice(0, 10))
  )
    // since the data contain in the array format so return the specific name since we need to display the name while user select
    resultFormatListSearchValue(valueSearchA1: any) {
      return valueSearchA1.description;
    }
  
    // forat data and return name  and save for passing data
    inputFormatListSearchValue(valueSearchA1: any) {
      return valueSearchA1.description;
    }
    searchPossession() {
      let param = '' ;
      if(typeof(this.query) === 'string') {
        param = this.query;
      } else {
        param = this.query.description
      }
      this.addProducts.getfilterData(param).subscribe(res => {
        if(res && res['length']) {
         this.allProductsData = res;
        } else {
          alert("No result found")
        }
      })
    }

}