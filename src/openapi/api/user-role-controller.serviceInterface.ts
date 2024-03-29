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

import { UserRole } from '../model/models';


import { ApiConfiguration }                                     from '../configuration';



export interface UserRoleControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: ApiConfiguration;

    /**
     * deleteUserRoleById
     * 
     * @param userRoleId userRoleId
     */
    deleteUserRoleById(userRoleId: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * getAllUserRoles
     * 
     * @param q q
     * @param sort sort
     */
    getAllUserRoles(q?: string, sort?: string, extraHttpRequestParams?: any): Observable<Array<UserRole>>;

    /**
     * getUserRoleById
     * 
     * @param userRoleId userRoleId
     */
    getUserRoleById(userRoleId: number, extraHttpRequestParams?: any): Observable<UserRole>;

    /**
     * saveUserRole
     * 
     * @param userRole userRole
     */
    saveUserRole(userRole: UserRole, extraHttpRequestParams?: any): Observable<UserRole>;

    /**
     * updateUserRole
     * 
     * @param userRole userRole
     */
    updateUserRole(userRole: UserRole, extraHttpRequestParams?: any): Observable<UserRole>;

}
