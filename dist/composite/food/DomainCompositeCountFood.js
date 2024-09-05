import { isNumber, } from '@vanyamate/types-kit';
import { isDomainFood, } from '../../entity';
export const isDomainCompositeCountFood = function (data) {
    return !(!isDomainFood(data) ||
        !isNumber(data['marks']) ||
        !isNumber(data['categories']) ||
        !isNumber(data['bases']) ||
        !isNumber(data['sizes']) ||
        !isNumber(data['additionals']) ||
        !isNumber(data['ingredients']));
};
export const assertDomainCompositeCountFood = function (data, errorMessage) {
    if (!isDomainCompositeCountFood(data)) {
        throw errorMessage(data);
    }
};
