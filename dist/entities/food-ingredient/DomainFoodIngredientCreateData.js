import { isObject, isString, isNumber, isArray, } from '@vanyamate/types-kit';
export const isDomainFoodIngredientCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['postfix']) ||
        !isArray(data['categoryType'], isString) ||
        !isNumber(data['price']) ||
        !isNumber(data['amount']));
};
export const assertDomainFoodIngredientCreateData = function (data, errorMessage) {
    if (!isDomainFoodIngredientCreateData(data)) {
        throw errorMessage(data);
    }
};
