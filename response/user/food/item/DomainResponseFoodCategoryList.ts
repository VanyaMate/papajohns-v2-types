import {
    TypeGuard,
    TypeAssert,
    isObject,
    isNumber,
    isArray,
} from '@vanyamate/types-kit';
import {
    DomainCompositeFood,
    DomainCategory,
    isDomainCategory,
    isDomainCompositeFood,
} from '../../../../index';


export type DomainResponseFoodCategoryList = {
    category: DomainCategory;
    list: Array<DomainCompositeFood>;
}

export const isDomainResponseFoodCategoryList: TypeGuard<DomainResponseFoodCategoryList> = function (data): data is DomainResponseFoodCategoryList {
    return !(
        !isObject(data) ||
        !isDomainCategory(data['category']) ||
        !isArray(data['list'], isDomainCompositeFood)
    );
};

export const assertDomainResponseFoodCategoryList: TypeAssert<DomainResponseFoodCategoryList> = function (data, errorMessage) {
    if (!isDomainResponseFoodCategoryList(data)) {
        throw errorMessage(data);
    }
};