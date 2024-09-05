import { isNumber, } from '@vanyamate/types-kit';
import { isDomainFoodAdditional } from '../../../entity';
export const isDomainCompositeCountFoodAdditional = function (data) {
    return !(!isDomainFoodAdditional(data) ||
        !isNumber(data['bases']) ||
        !isNumber(data['sizes']) ||
        !isNumber(data['categories']));
};
export const assertDomainCompositeCountFoodAdditional = function (data, errorMessage) {
    if (!isDomainCompositeCountFoodAdditional(data)) {
        throw errorMessage(data);
    }
};
