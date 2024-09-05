import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategory, DomainFood, DomainFoodAdditional, DomainFoodBase, DomainFoodIngredient, DomainFoodSize } from '../../../entity';
export type DomainCompositeCategory = DomainCategory & {
    foods: Array<DomainFood>;
    ingredients: Array<DomainFoodIngredient>;
    bases: Array<DomainFoodBase>;
    sizes: Array<DomainFoodSize>;
    additionals: Array<DomainFoodAdditional>;
};
export declare const isDomainCompositeCategory: TypeGuard<DomainCompositeCategory>;
export declare const assertDomainCompositeCategory: TypeAssert<DomainCompositeCategory>;
