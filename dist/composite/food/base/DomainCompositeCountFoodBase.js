import { isNumber, } from '@vanyamate/types-kit';
import { isDomainFoodBase, } from '../../../entity';
export const isDomainCompositeCountFoodBase = function (data) {
    return !(!isDomainFoodBase(data) ||
        !isNumber(data['foods']) ||
        !isNumber(data['sizes']) ||
        !isNumber(data['additionals']) ||
        !isNumber(data['categories']));
};
export const assertDomainCompositeCountFoodBase = function (data, errorMessage) {
    if (!isDomainCompositeCountFoodBase(data)) {
        throw errorMessage(data);
    }
};
