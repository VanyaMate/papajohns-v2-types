import { isObject, isString, isOptional, } from '@vanyamate/types-kit';
export const isDomainFoodAdditionalUpdateData = function (data) {
    return !(!isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['categoryType'], isString) ||
        !isOptional(data['price'], isString));
};
export const assertDomainFoodAdditionalUpdateData = function (data, errorMessage) {
    if (!isDomainFoodAdditionalUpdateData(data)) {
        throw errorMessage(data);
    }
};
