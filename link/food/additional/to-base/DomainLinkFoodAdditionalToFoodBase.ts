import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainLinkFoodAdditionalToFoodBase = {
    additionalId: string;
    baseId: string;
}

export const isDomainLinkFoodAdditionalToFoodBase: TypeGuard<DomainLinkFoodAdditionalToFoodBase> = function (data): data is DomainLinkFoodAdditionalToFoodBase {
    return !(
        !isObject(data) ||
        !isString(data['additionalId']) ||
        !isString(data['baseId'])
    );
};

export const assertDomainLinkFoodAdditionalToFoodBase: TypeAssert<DomainLinkFoodAdditionalToFoodBase> = function (data, errorMessage) {
    if (!isDomainLinkFoodAdditionalToFoodBase(data)) {
        throw errorMessage(data);
    }
};