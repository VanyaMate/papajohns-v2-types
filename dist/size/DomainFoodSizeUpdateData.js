import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainFoodSizeUpdateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['field']));
};
export const assertDomainFoodSizeUpdateData = function (data, errorMessage) {
    if (!isDomainFoodSizeUpdateData(data)) {
        throw errorMessage(data);
    }
};
