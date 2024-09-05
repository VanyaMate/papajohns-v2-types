import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFood, DomainMark } from '../../../entity';
export type DomainCompositeMark = DomainMark & {
    foods: Array<DomainFood>;
};
export declare const isDomainCompositeMark: TypeGuard<DomainCompositeMark>;
export declare const assertDomainCompositeMark: TypeAssert<DomainCompositeMark>;
