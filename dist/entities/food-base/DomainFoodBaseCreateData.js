import { isObject, isString, isNumber, isArray, } from '@vanyamate/types-kit';
export const isDomainFoodBaseCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isNumber(data['price']) ||
        !isArray(data['categoryType'], isString));
};
export const assertDomainFoodBaseCreateData = function (data, errorMessage) {
    if (!isDomainFoodBaseCreateData(data)) {
        throw errorMessage(data);
    }
};
