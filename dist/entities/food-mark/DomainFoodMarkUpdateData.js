import { isObject, isString, isOptional, } from '@vanyamate/types-kit';
export const isDomainFoodMarkUpdateData = function (data) {
    return !(!isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['color'], isString));
};
export const assertDomainFoodMarkUpdateData = function (data, errorMessage) {
    if (!isDomainFoodMarkUpdateData(data)) {
        throw errorMessage(data);
    }
};
