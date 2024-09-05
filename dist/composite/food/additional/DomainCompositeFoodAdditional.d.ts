import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategory, DomainFood, DomainFoodAdditional, DomainFoodSize } from '../../../entity';
export type DomainCompositeFoodAdditional = DomainFoodAdditional & {
    bases: Array<DomainFood>;
    sizes: Array<DomainFoodSize>;
    categories: Array<DomainCategory>;
};
export declare const isDomainCompositeFoodAdditional: TypeGuard<DomainCompositeFoodAdditional>;
export declare const assertDomainCompositeFoodAdditional: TypeAssert<DomainCompositeFoodAdditional>;
