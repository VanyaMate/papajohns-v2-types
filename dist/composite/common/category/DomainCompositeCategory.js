import { isArray, } from '@vanyamate/types-kit';
import { isDomainCategory, isDomainFood, isDomainFoodAdditional, isDomainFoodBase, isDomainFoodIngredient, isDomainFoodSize, } from '../../../entity';
export const isDomainCompositeCategory = function (data) {
    return !(!isDomainCategory(data) ||
        !isArray(data['foods'], isDomainFood) ||
        !isArray(data['ingredients'], isDomainFoodIngredient) ||
        !isArray(data['bases'], isDomainFoodBase) ||
        !isArray(data['sizes'], isDomainFoodSize) ||
        !isArray(data['additionals'], isDomainFoodAdditional));
};
export const assertDomainCompositeCategory = function (data, errorMessage) {
    if (!isDomainCompositeCategory(data)) {
        throw errorMessage(data);
    }
};
