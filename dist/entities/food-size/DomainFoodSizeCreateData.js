import { isObject, isString, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodSizeCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isNumber(data['multiplier']) ||
        !isString(data['baseId']));
};
export const assertDomainFoodSizeCreateData = function (data, errorMessage) {
    if (!isDomainFoodSizeCreateData(data)) {
        throw errorMessage(data);
    }
};
