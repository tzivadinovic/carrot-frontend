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

import { Municipality } from '../model/models';


import { ApiConfiguration }                                     from '../configuration';



export interface MunicipalityControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: ApiConfiguration;

    /**
     * deleteMunicipalityById
     * 
     * @param municipalityId municipalityId
     */
    deleteMunicipalityById(municipalityId: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * getAllMunicipalities
     * 
     * @param q q
     * @param sort sort
     */
    getAllMunicipalities(q?: string, sort?: string, extraHttpRequestParams?: any): Observable<Array<Municipality>>;

    /**
     * getMunicipalityById
     * 
     * @param municipalityId municipalityId
     */
    getMunicipalityById(municipalityId: number, extraHttpRequestParams?: any): Observable<Municipality>;

    /**
     * saveMunicipality
     * 
     * @param municipality municipality
     */
    saveMunicipality(municipality: Municipality, extraHttpRequestParams?: any): Observable<Municipality>;

    /**
     * updateMunicipality
     * 
     * @param municipality municipality
     */
    updateMunicipality(municipality: Municipality, extraHttpRequestParams?: any): Observable<Municipality>;

}