import { isObject, isString, } from '@vanyamate/types-kit';
export var DomainCategoryType;
(function (DomainCategoryType) {
    DomainCategoryType["PIZZA"] = "pizza";
    DomainCategoryType["COFFEE"] = "coffee";
})(DomainCategoryType || (DomainCategoryType = {}));
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
