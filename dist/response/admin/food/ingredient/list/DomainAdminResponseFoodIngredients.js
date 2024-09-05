import { isArray, } from '@vanyamate/types-kit';
import { isDomainCompositeCountFoodIngredient, } from '../../../../../composite';
export const isDomainAdminResponseFoodIngredients = function (data) {
    return isArray(data, isDomainCompositeCountFoodIngredient);
};
export const assertDomainAdminResponseFoodIngredients = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodIngredients(data)) {
        throw errorMessage(data);
    }
};
