import { isArray, } from '@vanyamate/types-kit';
import { isDomainCategory, isDomainFoodAdditional, isDomainFoodBase, isDomainFoodSize, } from '../../../entity';
export const isDomainCompositeFoodSize = function (data) {
    return !(!isDomainFoodSize(data) ||
        !isArray(data['bases'], isDomainFoodBase) ||
        !isArray(data['additionals'], isDomainFoodAdditional) ||
        !isArray(data['categories'], isDomainCategory));
};
export const assertDomainCompositeFoodSize = function (data, errorMessage) {
    if (!isDomainCompositeFoodSize(data)) {
        throw errorMessage(data);
    }
};
