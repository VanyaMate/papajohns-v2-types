import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isOptional,
} from '@vanyamate/types-kit';


export type DomainFoodTypeUpdateData = {
    title?: string;
    image?: string;
    price?: string;
}

export const isDomainFoodTypeUpdateData: TypeGuard<DomainFoodTypeUpdateData> = function (data): data is DomainFoodTypeUpdateData {
    return !(
        !isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['price'], isString)
    );
};

export const assertDomainFoodTypeUpdateData: TypeAssert<DomainFoodTypeUpdateData> = function (data, errorMessage) {
    if (!isDomainFoodTypeUpdateData(data)) {
        throw errorMessage(data);
    }
};