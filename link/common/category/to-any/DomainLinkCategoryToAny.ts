import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainLinkCategoryToAny = {
    categoryId: string;
}

export const isDomainLinkCategoryToAny: TypeGuard<DomainLinkCategoryToAny> = function (data): data is DomainLinkCategoryToAny {
    return !(
        !isObject(data) ||
        !isString(data['categoryId'])
    );
};

export const assertDomainLinkCategoryToAny: TypeAssert<DomainLinkCategoryToAny> = function (data, errorMessage) {
    if (!isDomainLinkCategoryToAny(data)) {
        throw errorMessage(data);
    }
};