import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SettingsComponent } from './settings/settings.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CartComponent } from './cart/cart.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ServicioComponent } from './servicio/servicio.component';
import { BeneficioComponent } from './beneficio/beneficio.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    SettingsComponent,
    ShoppingCartComponent,
    CatalogsComponent,
    FooterComponent,
    ProyectosComponent,
    CartComponent,
    MarketingComponent,
    ServicioComponent,
    BeneficioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
