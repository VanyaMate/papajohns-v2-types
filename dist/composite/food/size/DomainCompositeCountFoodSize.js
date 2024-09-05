import { isNumber, } from '@vanyamate/types-kit';
import { isDomainFoodSize, } from '../../../entity';
export const isDomainCompositeCountFoodSize = function (data) {
    return !(!isDomainFoodSize(data) ||
        !isNumber(data['bases']) ||
        !isNumber(data['additionals']) ||
        !isNumber(data['categories']));
};
export const assertDomainCompositeCountFoodSize = function (data, errorMessage) {
    if (!isDomainCompositeCountFoodSize(data)) {
        throw errorMessage(data);
    }
};
