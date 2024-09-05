import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainCategoryCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['type']) ||
        !isString(data['image']));
};
export const assertDomainCategoryCreateData = function (data, errorMessage) {
    if (!isDomainCategoryCreateData(data)) {
        throw errorMessage(data);
    }
};
