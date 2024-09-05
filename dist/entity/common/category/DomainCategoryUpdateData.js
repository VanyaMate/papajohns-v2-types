import { isObject, isString, isOptional, } from '@vanyamate/types-kit';
export const isDomainCategoryUpdateData = function (data) {
    return !(!isObject(data) ||
        !isOptional(data['type'], isString) ||
        !isOptional(data['image'], isString));
};
export const assertDomainCategoryUpdateData = function (data, errorMessage) {
    if (!isDomainCategoryUpdateData(data)) {
        throw errorMessage(data);
    }
};
