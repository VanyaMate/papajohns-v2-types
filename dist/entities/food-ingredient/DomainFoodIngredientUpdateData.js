import { isObject, isString, isOptional, isNumber, } from '@vanyamate/types-kit';
export const isDomainFoodIngredientUpdateData = function (data) {
    return !(!isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['postfix'], isString) ||
        !isOptional(data['price'], isNumber) ||
        !isOptional(data['amount'], isNumber));
};
export const assertDomainFoodIngredientUpdateData = function (data, errorMessage) {
    if (!isDomainFoodIngredientUpdateData(data)) {
        throw errorMessage(data);
    }
};
