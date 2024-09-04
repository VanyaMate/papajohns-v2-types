import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isOptional, isNumber,
} from '@vanyamate/types-kit';


export type DomainFoodAdditionalUpdateData = {
    title?: string,
    price?: number,
    image?: string,
    description?: string,
}

export const isDomainFoodAdditionalUpdateData: TypeGuard<DomainFoodAdditionalUpdateData> = function (data): data is DomainFoodAdditionalUpdateData {
    return !(
        !isObject(data) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['description'], isString) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['price'], isNumber)
    );
};

export const assertDomainFoodAdditionalUpdateData: TypeAssert<DomainFoodAdditionalUpdateData> = function (data, errorMessage) {
    if (!isDomainFoodAdditionalUpdateData(data)) {
        throw errorMessage(data);
    }
};