import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainFoodCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['description']));
};
export const assertDomainFoodCreateData = function (data, errorMessage) {
    if (!isDomainFoodCreateData(data)) {
        throw errorMessage(data);
    }
};
