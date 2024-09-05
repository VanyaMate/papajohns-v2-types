import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isArray,
} from '@vanyamate/types-kit';
import {
    DomainCompositeCountFoodSize,
    isDomainCompositeCountFoodSize,
} from '../../../../../composite';


export type DomainAdminResponseFoodSizes = Array<DomainCompositeCountFoodSize>;

export const isDomainAdminResponseFoodSizes: TypeGuard<DomainAdminResponseFoodSizes> = function (data): data is DomainAdminResponseFoodSizes {
    return isArray(data, isDomainCompositeCountFoodSize);
};

export const assertDomainAdminResponseFoodSizes: TypeAssert<DomainAdminResponseFoodSizes> = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodSizes(data)) {
        throw errorMessage(data);
    }
};