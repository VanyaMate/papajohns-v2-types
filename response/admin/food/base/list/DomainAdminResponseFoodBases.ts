import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isArray,
} from '@vanyamate/types-kit';
import {
    DomainCompositeCountFoodBase,
    isDomainCompositeCountFoodBase,
} from '../../../../../composite';


export type DomainAdminResponseFoodBases = Array<DomainCompositeCountFoodBase>;

export const isDomainAdminResponseFoodBases: TypeGuard<DomainAdminResponseFoodBases> = function (data): data is DomainAdminResponseFoodBases {
    return isArray(data, isDomainCompositeCountFoodBase);
};

export const assertDomainAdminResponseFoodBases: TypeAssert<DomainAdminResponseFoodBases> = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodBases(data)) {
        throw errorMessage(data);
    }
};