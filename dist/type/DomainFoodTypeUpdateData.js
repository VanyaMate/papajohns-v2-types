import { isObject, isString, isOptional, } from '@vanyamate/types-kit';
export const isDomainFoodTypeUpdateData = function (data) {
    return !(!isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['price'], isString));
};
export const assertDomainFoodTypeUpdateData = function (data, errorMessage) {
    if (!isDomainFoodTypeUpdateData(data)) {
        throw errorMessage(data);
    }
};
