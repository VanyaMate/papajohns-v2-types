import { isObject, isString, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodBase = function (data) {
    return !(!isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isNumber(data['price']));
};
export const assertDomainFoodBase = function (data, errorMessage) {
    if (!isDomainFoodBase(data)) {
        throw errorMessage(data);
    }
};
