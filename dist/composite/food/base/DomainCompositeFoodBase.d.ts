import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategory, DomainFood, DomainFoodAdditional, DomainFoodBase, DomainFoodSize } from '../../../entity';
export type DomainCompositeFoodBase = DomainFoodBase & {
    foods: Array<DomainFood>;
    sizes: Array<DomainFoodSize>;
    additionals: Array<DomainFoodAdditional>;
    categories: Array<DomainCategory>;
};
export declare const isDomainCompositeFoodBase: TypeGuard<DomainCompositeFoodBase>;
export declare const assertDomainCompositeFoodBase: TypeAssert<DomainCompositeFoodBase>;
