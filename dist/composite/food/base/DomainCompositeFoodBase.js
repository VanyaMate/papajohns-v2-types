import { isArray, } from '@vanyamate/types-kit';
import { isDomainCategory, isDomainFood, isDomainFoodAdditional, isDomainFoodBase, isDomainFoodSize, } from '../../../entity';
export const isDomainCompositeFoodBase = function (data) {
    return !(!isDomainFoodBase(data) ||
        !isArray(data['foods'], isDomainFood) ||
        !isArray(data['sizes'], isDomainFoodSize) ||
        !isArray(data['additionals'], isDomainFoodAdditional) ||
        !isArray(data['categories'], isDomainCategory));
};
export const assertDomainCompositeFoodBase = function (data, errorMessage) {
    if (!isDomainCompositeFoodBase(data)) {
        throw errorMessage(data);
    }
};
