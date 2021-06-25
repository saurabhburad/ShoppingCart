import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../app-constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddproductsdataService {

  constructor(private http: HttpClient) { }

  addProductsData(data) {
    return this.http.post(Constants.URL+'submit', data);
  }

  getProductsData() {
    return this.http.get(Constants.URL+'getproductdata').pipe(map(res => {
      for(let i=0;i<res['length'];i++) {
        res[i].image1 = './../../../../assets/' + res[i].image1
        res[i].image2 = './../../../../assets/' + res[i].image2
  
        res[i].image3 = './../../../../assets/' + res[i].image3
  
        res[i].image4 = './../../../../assets/' + res[i].image4
  
        res[i].image5 = './../../../../assets/' + res[i].image5
  
      }
      return res;
     }))
     
  }
  getfilterData(query) {
    return this.http.get(Constants.URL+'search/'+query).pipe(map(res => {
      for(let i=0;i<res['length'];i++) {
        res[i].image1 = './../../../../assets/' + res[i].image1
        res[i].image2 = './../../../../assets/' + res[i].image2
  
        res[i].image3 = './../../../../assets/' + res[i].image3
  
        res[i].image4 = './../../../../assets/' + res[i].image4
  
        res[i].image5 = './../../../../assets/' + res[i].image5
  
      }
      return res;
     }))
     
  }
  deleteProductsData(id) {
    return this.http.delete(`${Constants.URL}removeData/${id}`)
  }
}
