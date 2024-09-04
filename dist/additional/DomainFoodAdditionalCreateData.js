import { isObject, isString, isOptional, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodAdditionalCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['title']) ||
        !isNumber(data['price']) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['description'], isString));
};
export const assertDomainFoodAdditionalCreateData = function (data, errorMessage) {
    if (!isDomainFoodAdditionalCreateData(data)) {
        throw errorMessage(data);
    }
};
