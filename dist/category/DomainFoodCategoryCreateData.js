import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainFoodCategoryCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']));
};
export const assertDomainFoodCategoryCreateData = function (data, errorMessage) {
    if (!isDomainFoodCategoryCreateData(data)) {
        throw errorMessage(data);
    }
};
