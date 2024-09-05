import { isDomainCompositeFoodSize, } from '../../../../../composite';
export const isDomainAdminResponseFoodSize = function (data) {
    return isDomainCompositeFoodSize(data);
};
export const assertDomainAdminResponseFoodSize = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodSize(data)) {
        throw errorMessage(data);
    }
};
