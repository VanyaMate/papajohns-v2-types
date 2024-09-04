import { isObject, isString, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodNutritionalCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['title']) ||
        !isNumber(data['value']));
};
export const assertDomainFoodNutritionalCreateData = function (data, errorMessage) {
    if (!isDomainFoodNutritionalCreateData(data)) {
        throw errorMessage(data);
    }
};
