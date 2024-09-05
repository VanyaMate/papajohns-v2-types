import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodSize } from '../../../entity';
export type DomainCompositeCountFoodSize = DomainFoodSize & {
    bases: number;
    additionals: number;
    categories: number;
};
export declare const isDomainCompositeCountFoodSize: TypeGuard<DomainCompositeCountFoodSize>;
export declare const assertDomainCompositeCountFoodSize: TypeAssert<DomainCompositeCountFoodSize>;
