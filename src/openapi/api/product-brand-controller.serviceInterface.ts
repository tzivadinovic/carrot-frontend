/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { ProductBrand } from '../model/models';


import { ApiConfiguration }                                     from '../configuration';



export interface ProductBrandControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: ApiConfiguration;

    /**
     * deleteProductBrandById
     * 
     * @param productBrandId productBrandId
     */
    deleteProductBrandById(productBrandId: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * getAllProductBrands
     * 
     * @param q q
     * @param sort sort
     */
    getAllProductBrands(q?: string, sort?: string, extraHttpRequestParams?: any): Observable<Array<ProductBrand>>;

    /**
     * getProductBrandById
     * 
     * @param productBrandId productBrandId
     */
    getProductBrandById(productBrandId: number, extraHttpRequestParams?: any): Observable<ProductBrand>;

    /**
     * saveProductBrand
     * 
     * @param productBrand productBrand
     */
    saveProductBrand(productBrand: ProductBrand, extraHttpRequestParams?: any): Observable<ProductBrand>;

    /**
     * updateProductBrand
     * 
     * @param productBrand productBrand
     */
    updateProductBrand(productBrand: ProductBrand, extraHttpRequestParams?: any): Observable<ProductBrand>;

}
