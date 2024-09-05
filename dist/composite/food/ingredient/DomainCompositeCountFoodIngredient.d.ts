import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodIngredient } from '../../../entity';
export type DomainCompositeCountFoodIngredient = DomainFoodIngredient & {
    foods: number;
    categories: number;
};
export declare const isDomainCompositeCountFoodIngredient: TypeGuard<DomainCompositeCountFoodIngredient>;
export declare const assertDomainCompositeCountFoodIngredient: TypeAssert<DomainCompositeCountFoodIngredient>;
