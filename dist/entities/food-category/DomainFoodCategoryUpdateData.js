import { isObject, isString, isOptional, } from '@vanyamate/types-kit';
export const isDomainFoodCategoryUpdateData = function (data) {
    return !(!isObject(data) ||
        !isOptional(data['type'], isString) ||
        !isOptional(data['image'], isString));
};
export const assertDomainFoodCategoryUpdateData = function (data, errorMessage) {
    if (!isDomainFoodCategoryUpdateData(data)) {
        throw errorMessage(data);
    }
};
