import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainLinkFoodSizeToFoodBase = {
    image: string;
}

export const isDomainLinkFoodSizeToFoodBase: TypeGuard<DomainLinkFoodSizeToFoodBase> = function (data): data is DomainLinkFoodSizeToFoodBase {
    return !(
        !isObject(data) ||
        !isString(data['image'])
    );
};

export const assertDomainLinkFoodSizeToFoodBase: TypeAssert<DomainLinkFoodSizeToFoodBase> = function (data, errorMessage) {
    if (!isDomainLinkFoodSizeToFoodBase(data)) {
        throw errorMessage(data);
    }
};