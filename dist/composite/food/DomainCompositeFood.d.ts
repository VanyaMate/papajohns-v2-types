import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategory, DomainFood, DomainFoodAdditional, DomainFoodBase, DomainFoodIngredient, DomainFoodSize, DomainMark } from '../../entity';
export type DomainCompositeFood = DomainFood & {
    marks: Array<DomainMark>;
    categories: Array<DomainCategory>;
    bases: Array<DomainFoodBase>;
    sizes: Array<DomainFoodSize>;
    additionals: Array<DomainFoodAdditional>;
    ingredients: Array<DomainFoodIngredient>;
};
export declare const isDomainCompositeFood: TypeGuard<DomainCompositeFood>;
export declare const assertDomainCompositeFood: TypeAssert<DomainCompositeFood>;
