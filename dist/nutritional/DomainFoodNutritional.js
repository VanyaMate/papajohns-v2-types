import { isObject, isString, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodNutritional = function (data) {
    return !(!isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isNumber(data['value']));
};
export const assertDomainFoodNutritional = function (data, errorMessage) {
    if (!isDomainFoodNutritional(data)) {
        throw errorMessage(data);
    }
};
