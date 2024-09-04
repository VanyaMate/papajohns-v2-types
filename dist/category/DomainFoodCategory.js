import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainFoodCategory = function (data) {
    return !(!isObject(data) ||
        !isString(data['field']));
};
export const assertDomainFoodCategory = function (data, errorMessage) {
    if (!isDomainFoodCategory(data)) {
        throw errorMessage(data);
    }
};
