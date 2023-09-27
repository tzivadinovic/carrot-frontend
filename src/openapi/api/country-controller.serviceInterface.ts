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

import { Country } from '../model/models';


import { ApiConfiguration }                                     from '../configuration';



export interface CountryControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: ApiConfiguration;

    /**
     * deleteCountryById
     * 
     * @param countryId countryId
     */
    deleteCountryById(countryId: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * getAllCountries
     * 
     * @param q q
     * @param sort sort
     */
    getAllCountries(q?: string, sort?: string, extraHttpRequestParams?: any): Observable<Array<Country>>;

    /**
     * getCountryById
     * 
     * @param countryId countryId
     */
    getCountryById(countryId: number, extraHttpRequestParams?: any): Observable<Country>;

    /**
     * saveCountry
     * 
     * @param country country
     */
    saveCountry(country: Country, extraHttpRequestParams?: any): Observable<Country>;

    /**
     * updateCountry
     * 
     * @param country country
     */
    updateCountry(country: Country, extraHttpRequestParams?: any): Observable<Country>;

}
