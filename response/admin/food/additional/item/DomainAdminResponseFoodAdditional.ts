import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';
import { DomainFoodAdditional } from '../../../../../entity';
import {
    DomainCompositeFoodAdditional,
    isDomainCompositeFoodAdditional,
} from '../../../../../composite';


export type DomainAdminResponseFoodAdditional = DomainCompositeFoodAdditional;

export const isDomainAdminResponseFoodAdditional: TypeGuard<DomainAdminResponseFoodAdditional> = function (data): data is DomainAdminResponseFoodAdditional {
    return isDomainCompositeFoodAdditional(data);
};

export const assertDomainAdminResponseFoodAdditional: TypeAssert<DomainAdminResponseFoodAdditional> = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodAdditional(data)) {
        throw errorMessage(data);
    }
};