import { isObject, isString, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodSize = function (data) {
    return !(!isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isNumber(data['multiplier']) ||
        !isNumber(data['person']));
};
export const assertDomainFoodSize = function (data, errorMessage) {
    if (!isDomainFoodSize(data)) {
        throw errorMessage(data);
    }
};
