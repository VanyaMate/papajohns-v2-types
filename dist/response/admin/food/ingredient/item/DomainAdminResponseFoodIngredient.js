import { isDomainCompositeFoodIngredient, } from '../../../../../composite';
export const isDomainAdminResponseFoodIngredient = function (data) {
    return isDomainCompositeFoodIngredient(data);
};
export const assertDomainAdminResponseFoodIngredient = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodIngredient(data)) {
        throw errorMessage(data);
    }
};
