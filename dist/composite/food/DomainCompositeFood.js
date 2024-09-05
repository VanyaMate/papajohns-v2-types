import { isArray, } from '@vanyamate/types-kit';
import { isDomainCategory, isDomainFood, isDomainFoodAdditional, isDomainFoodBase, isDomainFoodIngredient, isDomainFoodSize, isDomainMark, } from '../../entity';
export const isDomainCompositeFood = function (data) {
    return !(!isDomainFood(data) ||
        !isArray(data['marks'], isDomainMark) ||
        !isArray(data['categories'], isDomainCategory) ||
        !isArray(data['bases'], isDomainFoodBase) ||
        !isArray(data['sizes'], isDomainFoodSize) ||
        !isArray(data['additionals'], isDomainFoodAdditional) ||
        !isArray(data['ingredients'], isDomainFoodIngredient));
};
export const assertDomainCompositeFood = function (data, errorMessage) {
    if (!isDomainCompositeFood(data)) {
        throw errorMessage(data);
    }
};
