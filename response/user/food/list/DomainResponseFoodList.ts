import {
    TypeGuard,
    TypeAssert,
    isArray,
} from '@vanyamate/types-kit';
import {
    DomainResponseFoodCategoryList, isDomainResponseFoodCategoryList,
} from '../item/DomainResponseFoodCategoryList';


export type DomainResponseFoodList = Array<DomainResponseFoodCategoryList>;

export const isDomainResponseFoodList: TypeGuard<DomainResponseFoodList> = function (data): data is DomainResponseFoodList {
    return isArray(data, isDomainResponseFoodCategoryList);
};

export const assertDomainResponseFoodList: TypeAssert<DomainResponseFoodList> = function (data, errorMessage) {
    if (!isDomainResponseFoodList(data)) {
        throw errorMessage(data);
    }
};