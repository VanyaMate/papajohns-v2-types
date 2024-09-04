import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainFoodTypeCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['price']));
};
export const assertDomainFoodTypeCreateData = function (data, errorMessage) {
    if (!isDomainFoodTypeCreateData(data)) {
        throw errorMessage(data);
    }
};
