import { isObject, isString, } from '@vanyamate/types-kit';
export var DomainFoodCategoryType;
(function (DomainFoodCategoryType) {
    DomainFoodCategoryType["PIZZA"] = "pizza";
    DomainFoodCategoryType["COFFEE"] = "coffee";
})(DomainFoodCategoryType || (DomainFoodCategoryType = {}));
export const isDomainFoodCategory = function (data) {
    return !(!isObject(data) ||
        !isString(data['id']) ||
        !isString(data['type']) ||
        !isString(data['image']));
};
export const assertDomainFoodCategory = function (data, errorMessage) {
    if (!isDomainFoodCategory(data)) {
        throw errorMessage(data);
    }
};
