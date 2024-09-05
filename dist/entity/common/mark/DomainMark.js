import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainMark = function (data) {
    return !(!isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['color']));
};
export const assertDomainMark = function (data, errorMessage) {
    if (!isDomainMark(data)) {
        throw errorMessage(data);
    }
};
