import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainLinkCategoryToFoodAdditional = {
    categoryId: string;
    additionalId: string;
}

export const isDomainLinkCategoryToFoodAdditional: TypeGuard<DomainLinkCategoryToFoodAdditional> = function (data): data is DomainLinkCategoryToFoodAdditional {
    return !(
        !isObject(data) ||
        !isString(data['categoryId']) ||
        !isString(data['additionalId'])
    );
};

export const assertDomainLinkCategoryToFoodAdditional: TypeAssert<DomainLinkCategoryToFoodAdditional> = function (data, errorMessage) {
    if (!isDomainLinkCategoryToFoodAdditional(data)) {
        throw errorMessage(data);
    }
};