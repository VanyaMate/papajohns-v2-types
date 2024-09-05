import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainLinkFoodIngredientToFood = function (data) {
    return !(!isObject(data) ||
        !isString(data['field']));
};
export const assertDomainLinkFoodIngredientToFood = function (data, errorMessage) {
    if (!isDomainLinkFoodIngredientToFood(data)) {
        throw errorMessage(data);
    }
};
