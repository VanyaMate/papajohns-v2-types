import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainMark } from '../../../entity';
export type DomainCompositeCountMark = DomainMark & {
    foods: number;
};
export declare const isDomainCompositeCountMark: TypeGuard<DomainCompositeCountMark>;
export declare const assertDomainCompositeCountMark: TypeAssert<DomainCompositeCountMark>;
