import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*** Components Route ***/
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SettingsComponent } from './settings/settings.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CatalogsComponent } from './catalogs/catalogs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'application/home', component: HomeComponent },
  { path: 'application/settings', component: SettingsComponent },
  { path: 'application/shopping-cart', component: ShoppingCartComponent },
  { path: 'application/catalogs', component: CatalogsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
