import { isObject, isArray, } from '@vanyamate/types-kit';
import { isDomainCategory, isDomainCompositeFood, } from '../../../../index';
export const isDomainResponseFoodCategoryList = function (data) {
    return !(!isObject(data) ||
        !isDomainCategory(data['category']) ||
        !isArray(data['list'], isDomainCompositeFood));
};
export const assertDomainResponseFoodCategoryList = function (data, errorMessage) {
    if (!isDomainResponseFoodCategoryList(data)) {
        throw errorMessage(data);
    }
};
