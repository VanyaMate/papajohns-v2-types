import { isNumber, } from '@vanyamate/types-kit';
import { isDomainCategory, } from '../../../entity';
export const isDomainCompositeCountCategory = function (data) {
    return !(!isDomainCategory(data) ||
        !isNumber(data['foods']) ||
        !isNumber(data['ingredients']) ||
        !isNumber(data['bases']) ||
        !isNumber(data['sizes']) ||
        !isNumber(data['additionals']));
};
export const assertDomainCompositeCountCategory = function (data, errorMessage) {
    if (!isDomainCompositeCountCategory(data)) {
        throw errorMessage(data);
    }
};
