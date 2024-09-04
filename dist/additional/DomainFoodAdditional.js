import { isObject, isString, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodAdditional = function (data) {
    return !(!isObject(data) ||
        !isString(data['id']) ||
        !isString(data['image']) ||
        !isString(data['title']) ||
        !isString(data['description']) ||
        !isNumber(data['price']));
};
export const assertDomainFoodAdditional = function (data, errorMessage) {
    if (!isDomainFoodAdditional(data)) {
        throw errorMessage(data);
    }
};
