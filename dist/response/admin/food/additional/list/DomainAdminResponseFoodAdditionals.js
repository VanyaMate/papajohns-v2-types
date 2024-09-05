import { isArray, } from '@vanyamate/types-kit';
import { isDomainCompositeCountFoodAdditional, } from '../../../../../composite';
export const isDomainAdminResponseFoodAdditionals = function (data) {
    return isArray(data, isDomainCompositeCountFoodAdditional);
};
export const assertDomainAdminResponseFoodAdditionals = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodAdditionals(data)) {
        throw errorMessage(data);
    }
};
