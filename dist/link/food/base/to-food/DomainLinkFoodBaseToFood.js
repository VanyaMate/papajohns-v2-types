import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainLinkFoodBaseToFood = function (data) {
    return !(!isObject(data) ||
        !isString(data['image']));
};
export const assertDomainLinkFoodBaseToFood = function (data, errorMessage) {
    if (!isDomainLinkFoodBaseToFood(data)) {
        throw errorMessage(data);
    }
};
