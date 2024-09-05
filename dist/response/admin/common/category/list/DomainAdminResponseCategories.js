import { isArray, } from '@vanyamate/types-kit';
import { isDomainCompositeCountCategory, } from '../../../../../composite';
export const isDomainAdminResponseCategories = function (data) {
    return isArray(data, isDomainCompositeCountCategory);
};
export const assertDomainAdminResponseCategories = function (data, errorMessage) {
    if (!isDomainAdminResponseCategories(data)) {
        throw errorMessage(data);
    }
};
