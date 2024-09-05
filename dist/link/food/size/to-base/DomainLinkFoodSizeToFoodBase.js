import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainLinkFoodSizeToFoodBase = function (data) {
    return !(!isObject(data) ||
        !isString(data['image']));
};
export const assertDomainLinkFoodSizeToFoodBase = function (data, errorMessage) {
    if (!isDomainLinkFoodSizeToFoodBase(data)) {
        throw errorMessage(data);
    }
};
