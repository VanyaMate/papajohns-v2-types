import { isArray, } from '@vanyamate/types-kit';
import { isDomainCompositeCountFoodIngredient, } from '../../../../../composite';
export const isDomainAdminResponseFoodIgredients = function (data) {
    return isArray(data, isDomainCompositeCountFoodIngredient);
};
export const assertDomainAdminResponseFoodIgredients = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodIgredients(data)) {
        throw errorMessage(data);
    }
};
