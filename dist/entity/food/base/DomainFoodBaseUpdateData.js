import { isObject, isString, isNumber, isArray, isOptional, } from '@vanyamate/types-kit';
export const isDomainFoodBaseUpdateData = function (data) {
    return !(!isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['price'], isNumber) ||
        !isOptional(data['categoryType'], (value) => isArray(value, isString)));
};
export const assertDomainFoodBaseUpdateData = function (data, errorMessage) {
    if (!isDomainFoodBaseUpdateData(data)) {
        throw errorMessage(data);
    }
};
