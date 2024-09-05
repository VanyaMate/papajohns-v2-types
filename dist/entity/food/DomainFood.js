import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainFood = function (data) {
    return !(!isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['description']));
};
export const assertDomainFood = function (data, errorMessage) {
    if (!isDomainFood(data)) {
        throw errorMessage(data);
    }
};
