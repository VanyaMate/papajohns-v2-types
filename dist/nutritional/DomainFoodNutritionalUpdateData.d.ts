import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodNutritionalUpdateData = {
    title?: string;
    value?: number;
};
export declare const isDomainFoodNutritionalUpdateData: TypeGuard<DomainFoodNutritionalUpdateData>;
export declare const assertDomainFoodNutritionalUpdateData: TypeAssert<DomainFoodNutritionalUpdateData>;
