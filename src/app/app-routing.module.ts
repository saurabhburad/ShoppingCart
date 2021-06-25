import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartClothShoppingServicesService } from './features/cart/cart-cloth-shopping/cart-cloth-shopping-services.service';
import { MainClothshoppingComponent } from './main/main.component';

const routes: Routes = [{
  path: '',
  component: MainClothshoppingComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./features/home/home-cloth-shop.module').then(m => m.HomeClothShopModule)

    },
    {
      path: 'product',
      loadChildren: () => import('./features/products/products-cloth-shopping.module').then(m => m.ProductClothShoppingModule)

    },
    {
      path: 'productDetails',
      loadChildren: () => import('./features/products-details/products-details-cloth-shopping.module').then(m => m.ProductDetailClothShoppingModule)

    },
    {
      path: 'cartDetails',
      loadChildren: () => import('./features/cart/cart-cloth-shopping.module').then(m => m.CartClothShoppingModule)

    },
    {
      path: 'aboutPage',
      loadChildren: () => import('./features/about/about-cloth-shopping.module').then(m => m.AboutClothShoppingModule)

    },
    {
      path: 'adminPage',
      loadChildren: () => import('./features/admin/admin-shopping.module').then(m => m.adminClothShoppingModule)

    },
    {
      path: 'orderDetails',
      loadChildren: () => import('./features/buy/buy-cloth-shopping.module').then(m => m.BuyClothShoppingModule)

    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CartClothShoppingServicesService]
})
export class AppRoutingModule { }
