import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';
import {
    DomainCompositeFoodBase,
    isDomainCompositeFoodBase,
} from '../../../../../composite';


export type DomainAdminResponseFoodBase = DomainCompositeFoodBase;

export const isDomainAdminResponseFoodBase: TypeGuard<DomainAdminResponseFoodBase> = function (data): data is DomainAdminResponseFoodBase {
    return isDomainCompositeFoodBase(data);
};

export const assertDomainAdminResponseFoodBase: TypeAssert<DomainAdminResponseFoodBase> = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodBase(data)) {
        throw errorMessage(data);
    }
};