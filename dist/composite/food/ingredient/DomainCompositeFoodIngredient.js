import { isArray, } from '@vanyamate/types-kit';
import { isDomainCategory, isDomainFood, isDomainFoodIngredient, } from '../../../entity';
export const isDomainCompositeFoodIngredient = function (data) {
    return !(!isDomainFoodIngredient(data) ||
        !isArray(data['foods'], isDomainFood) ||
        !isArray(data['categories'], isDomainCategory));
};
export const assertDomainCompositeFoodIngredient = function (data, errorMessage) {
    if (!isDomainCompositeFoodIngredient(data)) {
        throw errorMessage(data);
    }
};
