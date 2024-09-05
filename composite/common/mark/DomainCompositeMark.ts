import {
    TypeGuard,
    TypeAssert,
    isArray,
} from '@vanyamate/types-kit';
import {
    DomainFood,
    DomainMark,
    isDomainFood,
    isDomainMark,
} from '../../../entity';


export type DomainCompositeMark = DomainMark & {
    foods: Array<DomainFood>;
}

export const isDomainCompositeMark: TypeGuard<DomainCompositeMark> = function (data): data is DomainCompositeMark {
    return !(
        !isDomainMark(data) ||
        !isArray((data as any)['foods'], isDomainFood)
    );
};

export const assertDomainCompositeMark: TypeAssert<DomainCompositeMark> = function (data, errorMessage) {
    if (!isDomainCompositeMark(data)) {
        throw errorMessage(data);
    }
};