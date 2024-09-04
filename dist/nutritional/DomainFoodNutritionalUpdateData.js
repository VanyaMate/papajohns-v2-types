import { isObject, isOptional, isString, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodNutritionalUpdateData = function (data) {
    return !(!isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['value'], isNumber));
};
export const assertDomainFoodNutritionalUpdateData = function (data, errorMessage) {
    if (!isDomainFoodNutritionalUpdateData(data)) {
        throw errorMessage(data);
    }
};
