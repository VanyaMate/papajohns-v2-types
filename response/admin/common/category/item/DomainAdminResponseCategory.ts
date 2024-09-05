import {
    TypeGuard,
    TypeAssert,
} from '@vanyamate/types-kit';
import {
    DomainCompositeCategory,
    isDomainCompositeCategory,
} from '../../../../../composite';


export type DomainAdminResponseCategory = DomainCompositeCategory;

export const isDomainAdminResponseCategory: TypeGuard<DomainAdminResponseCategory> = function (data): data is DomainAdminResponseCategory {
    return isDomainCompositeCategory(data);
};

export const assertDomainAdminResponseCategory: TypeAssert<DomainAdminResponseCategory> = function (data, errorMessage) {
    if (!isDomainAdminResponseCategory(data)) {
        throw errorMessage(data);
    }
};