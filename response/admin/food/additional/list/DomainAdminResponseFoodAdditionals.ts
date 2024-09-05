import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isArray,
} from '@vanyamate/types-kit';
import { DomainFoodAdditional } from '../../../../../entity';
import {
    DomainCompositeCountFoodAdditional,
    isDomainCompositeCountFoodAdditional,
} from '../../../../../composite';


export type DomainAdminResponseFoodAdditionals = Array<DomainCompositeCountFoodAdditional>;

export const isDomainAdminResponseFoodAdditionals: TypeGuard<DomainAdminResponseFoodAdditionals> = function (data): data is DomainAdminResponseFoodAdditionals {
    return isArray(data, isDomainCompositeCountFoodAdditional);
};

export const assertDomainAdminResponseFoodAdditionals: TypeAssert<DomainAdminResponseFoodAdditionals> = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodAdditionals(data)) {
        throw errorMessage(data);
    }
};