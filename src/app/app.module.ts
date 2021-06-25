import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonClothShoppingModule } from './common/common-cloth-shopping.module';
import { LoaderInterceptorService } from './interceptors/loader-interceptor.service';
import { MainClothshoppingComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainClothshoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonClothShoppingModule,
    HttpClientModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
