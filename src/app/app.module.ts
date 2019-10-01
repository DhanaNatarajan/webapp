import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { OwlModule} from 'ngx-owl-carousel';
import { Select2Module} from 'ng2-select2'

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AccountComponent } from './account/account.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HelpComponent } from './help/help.component';
import { TermsComponent } from './terms/terms.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SaleComponent } from './sale/sale.component';
import { WebpipePipe } from './webpipe.pipe';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    SinglepageComponent,
    CartComponent,
    CheckoutComponent,
    AccountComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    MyaccountComponent,
    WishlistComponent,
    HelpComponent,
    TermsComponent,
    AboutusComponent,
    SaleComponent,
    WebpipePipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    OwlModule,Select2Module,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
