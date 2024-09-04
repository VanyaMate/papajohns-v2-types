import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainFoodType = function (data) {
    return !(!isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['price']));
};
export const assertDomainFoodType = function (data, errorMessage) {
    if (!isDomainFoodType(data)) {
        throw errorMessage(data);
    }
};
