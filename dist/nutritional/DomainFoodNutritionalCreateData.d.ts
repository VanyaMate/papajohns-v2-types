import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodNutritionalCreateData = {
    title: string;
    value: number;
};
export declare const isDomainFoodNutritionalCreateData: TypeGuard<DomainFoodNutritionalCreateData>;
export declare const assertDomainFoodNutritionalCreateData: TypeAssert<DomainFoodNutritionalCreateData>;
