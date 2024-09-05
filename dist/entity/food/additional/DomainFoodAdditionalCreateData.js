import { isObject, isString, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodAdditionalCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['categoryType']) ||
        !isNumber(data['price']));
};
export const assertDomainFoodAdditionalCreateData = function (data, errorMessage) {
    if (!isDomainFoodAdditionalCreateData(data)) {
        throw errorMessage(data);
    }
};
