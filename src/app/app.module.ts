import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { PcComponentsComponent } from './products/pc-components/pc-components.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { PeripheralsComponent } from './products/peripherals/peripherals.component';
import { ElectronicsComponent } from './products/electronics/electronics.component';
import { GamingComponent } from './products/gaming/gaming.component';
import { NetworkComponent } from './products/network/network.component';
import { SmartphonesComponent } from './products/smartphones/smartphones.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import { ProductCategoryComponent } from './products/product-category/product-category.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'electronics', component: ElectronicsComponent},
    {path: 'gaming', component: GamingComponent},
    {path: 'laptops', component: LaptopsComponent},
    {path: 'network', component: NetworkComponent},
    {path: 'components', component: PcComponentsComponent},
    {path: 'peripherals', component: PeripheralsComponent},
    {path: 'smartphones', component: SmartphonesComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    PcComponentsComponent,
    LaptopsComponent,
    PeripheralsComponent,
    ElectronicsComponent,
    GamingComponent,
    NetworkComponent,
    SmartphonesComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductCardComponent,
    ProductCategoryComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        RouterModule.forRoot(routes),
        MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
