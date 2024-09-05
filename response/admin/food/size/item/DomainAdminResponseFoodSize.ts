import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';
import {
    DomainCompositeFoodSize,
    isDomainCompositeFoodSize,
} from '../../../../../composite';


export type DomainAdminResponseFoodSize = DomainCompositeFoodSize;

export const isDomainAdminResponseFoodSize: TypeGuard<DomainAdminResponseFoodSize> = function (data): data is DomainAdminResponseFoodSize {
    return isDomainCompositeFoodSize(data);
};

export const assertDomainAdminResponseFoodSize: TypeAssert<DomainAdminResponseFoodSize> = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodSize(data)) {
        throw errorMessage(data);
    }
};