import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainMarkCreateData = function (data) {
    return !(!isObject(data) ||
        !isString(data['title']) ||
        !isString(data['color']));
};
export const assertDomainMarkCreateData = function (data, errorMessage) {
    if (!isDomainMarkCreateData(data)) {
        throw errorMessage(data);
    }
};
