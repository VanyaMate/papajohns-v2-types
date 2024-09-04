import { isObject, isString, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodSizeCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['title']) ||
        !isNumber(data['multiplier']) ||
        !isNumber(data['person']));
};
export const assertDomainFoodSizeCreateData = function (data, errorMessage) {
    if (!isDomainFoodSizeCreateData(data)) {
        throw errorMessage(data);
    }
};
