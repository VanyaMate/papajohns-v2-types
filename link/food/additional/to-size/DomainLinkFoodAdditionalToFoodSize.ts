import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainLinkFoodAdditionalToFoodSize = {
    additionalId: string;
    sizeId: string;
}

export const isDomainLinkFoodAdditionalToFoodSize: TypeGuard<DomainLinkFoodAdditionalToFoodSize> = function (data): data is DomainLinkFoodAdditionalToFoodSize {
    return !(
        !isObject(data) ||
        !isString(data['additionalId']) ||
        !isString(data['sizeId'])
    );
};

export const assertDomainLinkFoodAdditionalToFoodSize: TypeAssert<DomainLinkFoodAdditionalToFoodSize> = function (data, errorMessage) {
    if (!isDomainLinkFoodAdditionalToFoodSize(data)) {
        throw errorMessage(data);
    }
};