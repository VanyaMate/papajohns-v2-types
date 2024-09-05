import { isArray, } from '@vanyamate/types-kit';
import { isDomainCategory, isDomainFoodAdditional, isDomainFoodBase, isDomainFoodSize, } from '../../../entity';
export const isDomainCompositeFoodAdditional = function (data) {
    return !(!isDomainFoodAdditional(data) ||
        !isArray(data['bases'], isDomainFoodBase) ||
        !isArray(data['sizes'], isDomainFoodSize) ||
        !isArray(data['categories'], isDomainCategory));
};
export const assertDomainCompositeFoodAdditional = function (data, errorMessage) {
    if (!isDomainCompositeFoodAdditional(data)) {
        throw errorMessage(data);
    }
};
