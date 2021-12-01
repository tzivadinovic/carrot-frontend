import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {PcComponentsComponent} from './products/pc-components/pc-components.component';
import {LaptopsComponent} from './products/laptops/laptops.component';
import {PeripheralsComponent} from './products/peripherals/peripherals.component';
import {ElectronicsComponent} from './products/electronics/electronics.component';
import {GamingComponent} from './products/gaming/gaming.component';
import {NetworkComponent} from './products/network/network.component';
import {SmartphonesComponent} from './products/smartphones/smartphones.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {HomeComponent} from './home/home.component';
import {ProductCardComponent} from './products/product-card/product-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {ProductCategoryComponent} from './products/product-category/product-category.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from './common/footer/footer.component';
import {AdminComponent} from './admin/admin.component';
import {AdminElectronicsComponent} from './admin/products/admin-electronics/admin-electronics.component';
import {AdminGamingComponent} from './admin/products/admin-gaming/admin-gaming.component';
import {AdminLaptopsComponent} from './admin/products/admin-laptops/admin-laptops.component';
import {AdminNetworkComponent} from './admin/products/admin-network/admin-network.component';
import {AdminPcComponentsComponent} from './admin/products/admin-pc-components/admin-pc-components.component';
import {AdminPeripheralsComponent} from './admin/products/admin-peripherals/admin-peripherals.component';
import {AdminSmartphonesComponent} from './admin/products/admin-smartphones/admin-smartphones.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatBadgeModule} from "@angular/material/badge";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {MatTabsModule} from "@angular/material/tabs";
import { EntityTableComponent } from './admin/dashboard/entity-table/entity-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import { ProfileComponent } from './auth/profile/profile.component';
import { EditProfileComponent } from './auth/profile/edit-profile/edit-profile.component';
import { MyOrdersComponent } from './auth/profile/my-orders/my-orders.component';
import { SecurityComponent } from './auth/profile/security/security.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { AddressesComponent } from './auth/profile/addresses/addresses.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    // USER
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'electronics', component: ElectronicsComponent},
    {path: 'gaming', component: GamingComponent},
    {path: 'laptops', component: LaptopsComponent},
    {path: 'network', component: NetworkComponent},
    {path: 'components', component: PcComponentsComponent},
    {path: 'peripherals', component: PeripheralsComponent},
    {path: 'smartphones', component: SmartphonesComponent},
    {path: 'cart', component: ShoppingCartComponent},
    // ADMIN
    {path: 'admin', component: AdminComponent},
    {path: 'admin/dashboard', component: DashboardComponent},
    {path: 'admin/electronics', component: AdminElectronicsComponent},
    {path: 'admin/gaming', component: AdminGamingComponent},
    {path: 'admin/laptops', component: AdminLaptopsComponent},
    {path: 'admin/network', component: AdminNetworkComponent},
    {path: 'admin/components', component: AdminPcComponentsComponent},
    {path: 'admin/peripherals', component: AdminPeripheralsComponent},
    {path: 'admin/smartphones', component: AdminSmartphonesComponent},

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
        FooterComponent,
        AdminComponent,
        AdminElectronicsComponent,
        AdminGamingComponent,
        AdminLaptopsComponent,
        AdminNetworkComponent,
        AdminPcComponentsComponent,
        AdminPeripheralsComponent,
        AdminSmartphonesComponent,
        DashboardComponent,
        ShoppingCartComponent,
        EntityTableComponent,
        ProfileComponent,
        EditProfileComponent,
        MyOrdersComponent,
        SecurityComponent,
        AddressesComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatBadgeModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
