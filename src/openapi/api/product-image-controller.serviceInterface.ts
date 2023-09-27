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

import { ProductImage } from '../model/models';


import { ApiConfiguration }                                     from '../configuration';



export interface ProductImageControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: ApiConfiguration;

    /**
     * deleteProductImageById
     * 
     * @param productImageId productImageId
     */
    deleteProductImageById(productImageId: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * getAllProductImages
     * 
     * @param q q
     * @param sort sort
     */
    getAllProductImages(q?: string, sort?: string, extraHttpRequestParams?: any): Observable<Array<ProductImage>>;

    /**
     * getProductImageById
     * 
     * @param productImageId productImageId
     */
    getProductImageById(productImageId: number, extraHttpRequestParams?: any): Observable<ProductImage>;

    /**
     * saveProductImage
     * 
     * @param productImage productImage
     */
    saveProductImage(productImage: ProductImage, extraHttpRequestParams?: any): Observable<ProductImage>;

    /**
     * updateProductImage
     * 
     * @param productImage productImage
     */
    updateProductImage(productImage: ProductImage, extraHttpRequestParams?: any): Observable<ProductImage>;

}
