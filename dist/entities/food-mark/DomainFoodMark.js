import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainFoodMark = function (data) {
    return !(!isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['color']));
};
export const assertDomainFoodMark = function (data, errorMessage) {
    if (!isDomainFoodMark(data)) {
        throw errorMessage(data);
    }
};
