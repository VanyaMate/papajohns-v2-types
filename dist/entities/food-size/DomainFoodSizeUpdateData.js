import { isObject, isString, isOptional, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodSizeUpdateData = function (data) {
    return !(!isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['baseId'], isString) ||
        !isOptional(data['multiplier'], isNumber));
};
export const assertDomainFoodSizeUpdateData = function (data, errorMessage) {
    if (!isDomainFoodSizeUpdateData(data)) {
        throw errorMessage(data);
    }
};
