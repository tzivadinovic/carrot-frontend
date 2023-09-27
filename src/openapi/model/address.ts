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
import { Municipality } from './municipality';
import { User } from './user';
import { Country } from './country';
import { City } from './city';


export interface Address { 
    city?: City;
    country?: Country;
    createdDate?: string;
    id?: number;
    lastModifiedBy?: string;
    lastModifiedDate?: string;
    municipality?: Municipality;
    number?: string;
    recordStatus?: number;
    street?: string;
    user?: User;
}
