import { isObject, isString, isOptional, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodAdditionalUpdateData = function (data) {
    return !(!isObject(data) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['description'], isString) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['price'], isNumber));
};
export const assertDomainFoodAdditionalUpdateData = function (data, errorMessage) {
    if (!isDomainFoodAdditionalUpdateData(data)) {
        throw errorMessage(data);
    }
};
