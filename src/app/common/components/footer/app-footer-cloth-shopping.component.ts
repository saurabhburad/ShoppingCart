import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-cloth-shopping-component',
  templateUrl: './app-footer-cloth-shopping.component.html',
  styleUrls: ['./app-footer-cloth-shopping.component.css']
})
export class AppFooterClothShoppingComponent {

  constructor(
    private router: Router
  ){
  }

  searchPossession() {
    this.router.navigate(['/describe/info']);

  }

}
