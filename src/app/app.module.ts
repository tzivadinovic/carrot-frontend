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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from './common/footer/footer.component';
import {AdminComponent} from './admin/admin.component';
import {AdminElectronicsComponent} from './admin/product-related/admin-electronics/admin-electronics.component';
import {AdminGamingComponent} from './admin/product-related/admin-gaming/admin-gaming.component';
import {AdminLaptopsComponent} from './admin/product-related/admin-laptops/admin-laptops.component';
import {AdminNetworkComponent} from './admin/product-related/admin-network/admin-network.component';
import {AdminPcComponentsComponent} from './admin/product-related/admin-pc-components/admin-pc-components.component';
import {AdminPeripheralsComponent} from './admin/product-related/admin-peripherals/admin-peripherals.component';
import {AdminSmartphonesComponent} from './admin/product-related/admin-smartphones/admin-smartphones.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatBadgeModule} from "@angular/material/badge";
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ProfileComponent} from './auth/profile/profile.component';
import {EditProfileComponent} from './auth/profile/edit-profile/edit-profile.component';
import {MyOrdersComponent} from './auth/profile/my-orders/my-orders.component';
import {SecurityComponent} from './auth/profile/security/security.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {ResetPasswordComponent} from './auth/login/reset-password/reset-password.component';
import {MatStepperModule} from "@angular/material/stepper";
import {UsersComponent} from "./admin/users/users.component";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CreateUserDialogComponent} from "./admin/users/dialogs/create-user-dialog/create-user-dialog.component";
import {EditUserDialogComponent} from './admin/users/dialogs/edit-user-dialog/edit-user-dialog.component';
import {DeleteDialogComponent} from './common/dialogs/delete-dialog/delete-dialog.component';
import {CategoriesComponent} from './admin/categories/categories.component';
import {
    CreateCategoryDialogComponent
} from './admin/categories/dialogs/create-category-dialog/create-category-dialog.component';
import {
    EditCategoryDialogComponent
} from './admin/categories/dialogs/edit-category-dialog/edit-category-dialog.component';
import {CitiesComponent} from './admin/cities/cities.component';
import {CountriesComponent} from './admin/countries/countries.component';
import {MunicipalitiesComponent} from './admin/municipalities/municipalities.component';
import {SubCategoriesComponent} from './admin/sub-categories/sub-categories.component';
import {ProductBrandsComponent} from "./admin/product-related/product-brands/product-brands.component";
import {ProductModelsComponent} from "./admin/product-related/product-models/product-models.component";
import {ProductCategoryComponent} from './admin/product-related/product-category/product-category.component';
import { EditCountryDialogComponent } from './admin/countries/dialogs/edit-country-dialog/edit-country-dialog.component';
import { CreateCountryDialogComponent } from './admin/countries/dialogs/create-country-dialog/create-country-dialog.component';
import { CreateMunicipalityDialogComponent } from './admin/municipalities/dialogs/create-municipality-dialog/create-municipality-dialog.component';
import { EditMunicipalityDialogComponent } from './admin/municipalities/dialogs/edit-municipality-dialog/edit-municipality-dialog.component';
import { CreateCityDialogComponent } from './admin/cities/dialogs/create-city-dialog/create-city-dialog.component';
import { EditCityDialogComponent } from './admin/cities/dialogs/edit-city-dialog/edit-city-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import { AdminAddressesComponent } from './admin/admin-addresses/admin-addresses.component';
import { CreateAdminAddressesComponent } from './admin/admin-addresses/dialogs/create-admin-addresses/create-admin-addresses.component';
import { EditAdminAddressesComponent } from './admin/admin-addresses/dialogs/edit-admin-addresses/edit-admin-addresses.component';
import { CreateProductBrandComponent } from './admin/product-related/product-brands/dialogs/create-product-brand/create-product-brand.component';
import { EditProductBrandComponent } from './admin/product-related/product-brands/dialogs/edit-product-brand/edit-product-brand.component';
import { CreateProductModelComponent } from './admin/product-related/product-models/dialogs/create-product-model/create-product-model.component';
import { EditProductModelComponent } from './admin/product-related/product-models/dialogs/edit-product-model/edit-product-model.component';
import { CreateSubCategoryComponent } from './admin/sub-categories/dialogs/create-sub-category/create-sub-category.component';
import { EditSubCategoryComponent } from './admin/sub-categories/dialogs/edit-sub-category/edit-sub-category.component';
import { ProductsComponent } from './admin/product-related/products/products.component';
import { CreateProductComponent } from './admin/product-related/products/dialogs/create-product/create-product.component';
import { EditProductComponent } from './admin/product-related/products/dialogs/edit-product/edit-product.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
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
        ProfileComponent,
        EditProfileComponent,
        MyOrdersComponent,
        SecurityComponent,
        ResetPasswordComponent,
        UsersComponent,
        CreateUserDialogComponent,
        EditUserDialogComponent,
        DeleteDialogComponent,
        CategoriesComponent,
        CreateCategoryDialogComponent,
        EditCategoryDialogComponent,
        CitiesComponent,
        CountriesComponent,
        MunicipalitiesComponent,
        SubCategoriesComponent,
        ProductBrandsComponent,
        ProductModelsComponent,
        ProductCategoryComponent,
        EditCountryDialogComponent,
        CreateCountryDialogComponent,
        CreateMunicipalityDialogComponent,
        EditMunicipalityDialogComponent,
        CreateCityDialogComponent,
        EditCityDialogComponent,
        AdminAddressesComponent,
        CreateAdminAddressesComponent,
        EditAdminAddressesComponent,
        CreateProductBrandComponent,
        EditProductBrandComponent,
        CreateProductModelComponent,
        EditProductModelComponent,
        CreateSubCategoryComponent,
        EditSubCategoryComponent,
        ProductsComponent,
        CreateProductComponent,
        EditProductComponent
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
        MatNativeDateModule,
        MatStepperModule,
        MatDialogModule,
        HttpClientModule,
        MatSnackBarModule,
        FormsModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
