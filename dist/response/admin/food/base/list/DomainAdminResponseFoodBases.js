import { isArray, } from '@vanyamate/types-kit';
import { isDomainCompositeCountFoodBase, } from '../../../../../composite';
export const isDomainAdminResponseFoodBases = function (data) {
    return isArray(data, isDomainCompositeCountFoodBase);
};
export const assertDomainAdminResponseFoodBases = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodBases(data)) {
        throw errorMessage(data);
    }
};
