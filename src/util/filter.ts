import {Municipality, User} from "../openapi";

export const filterUser = (user: User, inputPar: string) => {
    // @ts-ignore
    return [user.firstName, user.lastName, user.username].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};

export const filterCategory = (category: Municipality, inputPar: string) => {
    // @ts-ignore
    return [category.name].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};

export const filterCountry = (country: Municipality, inputPar: string) => {
    // @ts-ignore
    return [country.name].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};

export const filterMunicipality = (municipality: Municipality, inputPar: string) => {
    // @ts-ignore
    return [municipality.name].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};