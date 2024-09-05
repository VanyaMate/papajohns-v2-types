import { isNumber, } from '@vanyamate/types-kit';
import { isDomainMark } from '../../../entity';
export const isDomainCompositeCountMark = function (data) {
    return !(!isDomainMark(data) ||
        !isNumber(data['foods']));
};
export const assertDomainCompositeCountMark = function (data, errorMessage) {
    if (!isDomainCompositeCountMark(data)) {
        throw errorMessage(data);
    }
};
