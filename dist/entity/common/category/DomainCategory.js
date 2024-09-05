import { isObject, isString, } from '@vanyamate/types-kit';
export var DomainFoodCategoryType;
(function (DomainFoodCategoryType) {
    DomainFoodCategoryType["PIZZA"] = "pizza";
    DomainFoodCategoryType["COFFEE"] = "coffee";
})(DomainFoodCategoryType || (DomainFoodCategoryType = {}));
export const isDomainCategory = function (data) {
    return !(!isObject(data) ||
        !isString(data['id']) ||
        !isString(data['type']) ||
        !isString(data['image']));
};
export const assertDomainCategory = function (data, errorMessage) {
    if (!isDomainCategory(data)) {
        throw errorMessage(data);
    }
};
