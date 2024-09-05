import { isArray, } from '@vanyamate/types-kit';
import { isDomainCompositeCountFoodSize, } from '../../../../../composite';
export const isDomainAdminResponseFoodSizes = function (data) {
    return isArray(data, isDomainCompositeCountFoodSize);
};
export const assertDomainAdminResponseFoodSizes = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodSizes(data)) {
        throw errorMessage(data);
    }
};
