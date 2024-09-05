import { isObject, isString, isOptional, } from '@vanyamate/types-kit';
export const isDomainMarkUpdateData = function (data) {
    return !(!isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['color'], isString));
};
export const assertDomainMarkUpdateData = function (data, errorMessage) {
    if (!isDomainMarkUpdateData(data)) {
        throw errorMessage(data);
    }
};
