import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainLinkCategoryToAny = function (data) {
    return !(!isObject(data) ||
        !isString(data['categoryId']));
};
export const assertDomainLinkCategoryToAny = function (data, errorMessage) {
    if (!isDomainLinkCategoryToAny(data)) {
        throw errorMessage(data);
    }
};
