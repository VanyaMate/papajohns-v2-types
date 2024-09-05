import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategory, DomainFoodAdditional, DomainFoodBase, DomainFoodSize } from '../../../entity';
export type DomainCompositeFoodSize = DomainFoodSize & {
    bases: Array<DomainFoodBase>;
    additionals: Array<DomainFoodAdditional>;
    categories: Array<DomainCategory>;
};
export declare const isDomainCompositeFoodSize: TypeGuard<DomainCompositeFoodSize>;
export declare const assertDomainCompositeFoodSize: TypeAssert<DomainCompositeFoodSize>;
