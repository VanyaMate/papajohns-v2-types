import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainFoodMarkCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['title']) ||
        !isString(data['color']));
};
export const assertDomainFoodMarkCreateData = function (data, errorMessage) {
    if (!isDomainFoodMarkCreateData(data)) {
        throw errorMessage(data);
    }
};
