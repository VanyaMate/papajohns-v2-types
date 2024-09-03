import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isOptional, isNumber,
} from '@vanyamate/types-kit';


export type DomainFoodAdditionalCreateData = {
    title?: string,
    price?: number,
    image?: string,
    description?: string,
}

export const isDomainFoodAdditionalUpdateData: TypeGuard<DomainFoodAdditionalCreateData> = function (data): data is DomainFoodAdditionalCreateData {
    return !(
        !isObject(data) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['description'], isString) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['price'], isNumber)
    );
};

export const assertDomainFoodAdditionalUpdateData: TypeAssert<DomainFoodAdditionalCreateData> = function (data, errorMessage) {
    if (!isDomainFoodAdditionalUpdateData(data)) {
        throw errorMessage(data);
    }
};