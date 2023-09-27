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

import { ModelAndView } from '../model/models';


import { ApiConfiguration }                                     from '../configuration';



export interface BasicErrorControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: ApiConfiguration;

    /**
     * errorHtml
     * 
     */
    errorHtmlUsingDELETE(extraHttpRequestParams?: any): Observable<ModelAndView>;

    /**
     * errorHtml
     * 
     */
    errorHtmlUsingGET(extraHttpRequestParams?: any): Observable<ModelAndView>;

    /**
     * errorHtml
     * 
     */
    errorHtmlUsingHEAD(extraHttpRequestParams?: any): Observable<ModelAndView>;

    /**
     * errorHtml
     * 
     */
    errorHtmlUsingOPTIONS(extraHttpRequestParams?: any): Observable<ModelAndView>;

    /**
     * errorHtml
     * 
     */
    errorHtmlUsingPATCH(extraHttpRequestParams?: any): Observable<ModelAndView>;

    /**
     * errorHtml
     * 
     */
    errorHtmlUsingPOST(extraHttpRequestParams?: any): Observable<ModelAndView>;

    /**
     * errorHtml
     * 
     */
    errorHtmlUsingPUT(extraHttpRequestParams?: any): Observable<ModelAndView>;

}