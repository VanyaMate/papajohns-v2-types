import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';
import { DomainMark, isDomainMark } from '../../../entity';


export type DomainCompositeCountMark = DomainMark & {
    foods: number;
}

export const isDomainCompositeCountMark: TypeGuard<DomainCompositeCountMark> = function (data): data is DomainCompositeCountMark {
    return !(
        !isDomainMark(data) ||
        !isNumber((data as any)['foods'])
    );
};

export const assertDomainCompositeCountMark: TypeAssert<DomainCompositeCountMark> = function (data, errorMessage) {
    if (!isDomainCompositeCountMark(data)) {
        throw errorMessage(data);
    }
};