import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { AccountComponent } from './account/account.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { HelpComponent } from './help/help.component';
import { TermsComponent } from './terms/terms.component';
import { SaleComponent } from './sale/sale.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'singlepage',component:SinglepageComponent},
  {path:'singlepage/:id',component:SinglepageComponent},
  {path:'account',component:AccountComponent},
  {path:'products',component:ProductsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'myaccount',component:MyaccountComponent},
  {path:'help',component:HelpComponent},
  {path:'terms',component:TermsComponent},
  {path:'sale',component:SaleComponent},
  {path:'wishlist',component:WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
