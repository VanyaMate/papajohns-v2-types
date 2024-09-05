import { isDomainCompositeFoodAdditional, } from '../../../../../composite';
export const isDomainAdminResponseFoodAdditional = function (data) {
    return isDomainCompositeFoodAdditional(data);
};
export const assertDomainAdminResponseFoodAdditional = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodAdditional(data)) {
        throw errorMessage(data);
    }
};
