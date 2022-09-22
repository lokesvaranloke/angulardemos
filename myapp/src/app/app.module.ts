import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EcommComponent } from './ecomm/ecomm.component';
import { CartsComponent } from './ecomm/carts/carts.component';
import { EcommproductComponent } from './ecomm/ecommproduct/ecommproduct.component';
import { NumbersComponent } from './numbers/numbers.component';
import { BasicHighlightDirective } from './BasicHighlightDirective';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { TformsComponent } from './tforms/tforms.component';
import { RformsComponent } from './rforms/rforms.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'server', component: ServerComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'numbers', component: NumbersComponent},
  {path: 'ecomm', component: EcommComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'observables', component: ObservablesComponent},
  {path: 'tforms', component: TformsComponent},
  {path: 'rforms', component: RformsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ProductsComponent,
    ProductComponent,
    EcommComponent,
    CartsComponent,
    EcommproductComponent,
    NumbersComponent,
    BasicHighlightDirective,
    AccountsComponent,
    AccountComponent,
    NewaccountComponent,
    HomeComponent,
    ObservablesComponent,
    TformsComponent,
    RformsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
