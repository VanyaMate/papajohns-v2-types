import {
    TypeGuard,
    TypeAssert,
    isArray,
} from '@vanyamate/types-kit';
import {
    DomainCompositeCountFood,
    isDomainCompositeCountFood,
} from '../../../composite';


export type DomainAdminResponseFoods = Array<DomainCompositeCountFood>;

export const isDomainAdminResponseFoods: TypeGuard<DomainAdminResponseFoods> = function (data): data is DomainAdminResponseFoods {
    return isArray(data, isDomainCompositeCountFood);
};

export const assertDomainAdminResponseFoods: TypeAssert<DomainAdminResponseFoods> = function (data, errorMessage) {
    if (!isDomainAdminResponseFoods(data)) {
        throw errorMessage(data);
    }
};