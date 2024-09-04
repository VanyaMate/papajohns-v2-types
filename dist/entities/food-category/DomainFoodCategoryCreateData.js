import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainFoodCategoryCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['type']) ||
        !isString(data['image']));
};
export const assertDomainFoodCategoryCreateData = function (data, errorMessage) {
    if (!isDomainFoodCategoryCreateData(data)) {
        throw errorMessage(data);
    }
};
