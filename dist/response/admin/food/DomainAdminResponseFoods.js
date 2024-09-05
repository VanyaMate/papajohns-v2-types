import { isArray, } from '@vanyamate/types-kit';
import { isDomainCompositeCountFood, } from '../../../composite';
export const isDomainAdminResponseFoods = function (data) {
    return isArray(data, isDomainCompositeCountFood);
};
export const assertDomainAdminResponseFoods = function (data, errorMessage) {
    if (!isDomainAdminResponseFoods(data)) {
        throw errorMessage(data);
    }
};
