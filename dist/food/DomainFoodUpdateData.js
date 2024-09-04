import { isObject, isString, isOptional, } from '@vanyamate/types-kit';
export const isDomainFoodUpdateData = function (data) {
    return !(!isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['description'], isString));
};
export const assertDomainFoodUpdateData = function (data, errorMessage) {
    if (!isDomainFoodUpdateData(data)) {
        throw errorMessage(data);
    }
};
