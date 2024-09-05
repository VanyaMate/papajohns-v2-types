import { isArray, } from '@vanyamate/types-kit';
import { isDomainFood, isDomainMark, } from '../../../entity';
export const isDomainCompositeMark = function (data) {
    return !(!isDomainMark(data) ||
        !isArray(data['foods'], isDomainFood));
};
export const assertDomainCompositeMark = function (data, errorMessage) {
    if (!isDomainCompositeMark(data)) {
        throw errorMessage(data);
    }
};
