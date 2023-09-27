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

import { SubCategory } from '../model/models';


import { ApiConfiguration }                                     from '../configuration';



export interface SubCategoryControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: ApiConfiguration;

    /**
     * deleteSubCategoryById
     * 
     * @param subCategoryId subCategoryId
     */
    deleteSubCategoryById(subCategoryId: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * getAllSubCategories
     * 
     * @param q q
     * @param sort sort
     */
    getAllSubCategories(q?: string, sort?: string, extraHttpRequestParams?: any): Observable<Array<SubCategory>>;

    /**
     * getSubCategoryById
     * 
     * @param subCategoryId subCategoryId
     */
    getSubCategoryById(subCategoryId: number, extraHttpRequestParams?: any): Observable<SubCategory>;

    /**
     * saveSubCategory
     * 
     * @param subCategory subCategory
     */
    saveSubCategory(subCategory: SubCategory, extraHttpRequestParams?: any): Observable<SubCategory>;

    /**
     * updateSubCategory
     * 
     * @param subCategory subCategory
     */
    updateSubCategory(subCategory: SubCategory, extraHttpRequestParams?: any): Observable<SubCategory>;

}