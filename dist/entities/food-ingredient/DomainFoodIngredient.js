import { isObject, isString, isNumber, } from '@vanyamate/types-kit';
export var DomainFoodIngredientPostfix;
(function (DomainFoodIngredientPostfix) {
    DomainFoodIngredientPostfix["GRAMME"] = "gramme";
    DomainFoodIngredientPostfix["EACH"] = "each";
    DomainFoodIngredientPostfix["MILLILITER"] = "milliliter";
})(DomainFoodIngredientPostfix || (DomainFoodIngredientPostfix = {}));
export const isDomainFoodIngredient = function (data) {
    return !(!isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['postfix']) ||
        !isNumber(data['price']) ||
        !isNumber(data['amount']));
};
export const assertDomainFoodIngredient = function (data, errorMessage) {
    if (!isDomainFoodIngredient(data)) {
        throw errorMessage(data);
    }
};
