import { isDomainCompositeFoodBase, } from '../../../../../composite';
export const isDomainAdminResponseFoodBase = function (data) {
    return isDomainCompositeFoodBase(data);
};
export const assertDomainAdminResponseFoodBase = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodBase(data)) {
        throw errorMessage(data);
    }
};
