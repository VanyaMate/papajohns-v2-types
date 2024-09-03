import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isOptional, isNumber,
} from '@vanyamate/types-kit';


export type DomainFoodAdditionalCreateData = {
    title: string,
    price: number,
    image?: string,
    description?: string,
}

export const isDomainFoodAdditionalCreateData: TypeGuard<DomainFoodAdditionalCreateData> = function (data): data is DomainFoodAdditionalCreateData {
    return !(
        !isObject(data) ||
        !isString(data['title']) ||
        !isNumber(data['price']) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['description'], isString)
    );
};

export const assertDomainFoodAdditionalCreateData: TypeAssert<DomainFoodAdditionalCreateData> = function (data, errorMessage) {
    if (!isDomainFoodAdditionalCreateData(data)) {
        throw errorMessage(data);
    }
};