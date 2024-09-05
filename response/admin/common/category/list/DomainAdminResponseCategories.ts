import {
    TypeGuard,
    TypeAssert,
    isArray,
} from '@vanyamate/types-kit';
import {
    DomainCompositeCountCategory, isDomainCompositeCountCategory,
} from '../../../../../composite';


export type DomainAdminResponseCategories = Array<DomainCompositeCountCategory>;

export const isDomainAdminResponseCategories: TypeGuard<DomainAdminResponseCategories> = function (data): data is DomainAdminResponseCategories {
    return isArray(data, isDomainCompositeCountCategory);
};

export const assertDomainAdminResponseCategories: TypeAssert<DomainAdminResponseCategories> = function (data, errorMessage) {
    if (!isDomainAdminResponseCategories(data)) {
        throw errorMessage(data);
    }
};