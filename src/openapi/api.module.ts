import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { ApiConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AddressControllerService } from './api/address-controller.service';
import { BasicErrorControllerService } from './api/basic-error-controller.service';
import { CategoryControllerService } from './api/category-controller.service';
import { CityControllerService } from './api/city-controller.service';
import { CommentControllerService } from './api/comment-controller.service';
import { CountryControllerService } from './api/country-controller.service';
import { MunicipalityControllerService } from './api/municipality-controller.service';
import { OrderControllerService } from './api/order-controller.service';
import { ProductBrandControllerService } from './api/product-brand-controller.service';
import { ProductControllerService } from './api/product-controller.service';
import { ProductImageControllerService } from './api/product-image-controller.service';
import { ProductModelControllerService } from './api/product-model-controller.service';
import { ProductOrderControllerService } from './api/product-order-controller.service';
import { ProductSpecificationControllerService } from './api/product-specification-controller.service';
import { RoleControllerService } from './api/role-controller.service';
import { SubCategoryControllerService } from './api/sub-category-controller.service';
import { UserControllerService } from './api/user-controller.service';
import { UserRoleControllerService } from './api/user-role-controller.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => ApiConfiguration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: ApiConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
