import { isArray, } from '@vanyamate/types-kit';
import { isDomainResponseFoodCategoryList, } from '../item/DomainResponseFoodCategoryList';
export const isDomainResponseFoodList = function (data) {
    return isArray(data, isDomainResponseFoodCategoryList);
};
export const assertDomainResponseFoodList = function (data, errorMessage) {
    if (!isDomainResponseFoodList(data)) {
        throw errorMessage(data);
    }
};
