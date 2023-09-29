import {
    Address,
    Category,
    City,
    Country,
    Municipality,
    ProductBrand,
    ProductModel,
    SubCategory,
    User
} from "../openapi";

export const filterUser = (user: User, inputPar: string) => {
    // @ts-ignore
    return [user.firstName, user.lastName, user.username].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};

export const filterCategory = (category: Category, inputPar: string) => {
    // @ts-ignore
    return [category.name].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};

export const filterSubCategory = (subCategory: SubCategory, inputPar: string) => {
    // @ts-ignore
    return [subCategory.name, subCategory.category?.name].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};

export const filterProductBrand = (productBrand: ProductBrand, inputPar: string) => {
    // @ts-ignore
    return [productBrand.name].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};

export const filterProductModel = (productModel: ProductModel, inputPar: string) => {
    // @ts-ignore
    return [productModel.name, productModel.productBrand?.name].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};

export const filterCountry = (country: Country, inputPar: string) => {
    // @ts-ignore
    return [country.name].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};

export const filterMunicipality = (municipality: Municipality, inputPar: string) => {
    // @ts-ignore
    return [municipality.name].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};

export const filterCity = (city: City, inputPar: string) => {
    // @ts-ignore
    return [city.name, city.zipCode, city.country?.name].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};

export const filterAddress = (address: Address, inputPar: string) => {
    // @ts-ignore
    return [address.street, address.city?.name, address.country?.name, address.city?.zipCode, address.user?.username].some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};