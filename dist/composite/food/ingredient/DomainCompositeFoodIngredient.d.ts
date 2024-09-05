import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategory, DomainFood, DomainFoodIngredient } from '../../../entity';
export type DomainCompositeFoodIngredient = DomainFoodIngredient & {
    foods: Array<DomainFood>;
    categories: Array<DomainCategory>;
};
export declare const isDomainCompositeFoodIngredient: TypeGuard<DomainCompositeFoodIngredient>;
export declare const assertDomainCompositeFoodIngredient: TypeAssert<DomainCompositeFoodIngredient>;
