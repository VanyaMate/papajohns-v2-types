import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodNutritional = {
    id: string;
    title: string;
    value: number;
};
export declare const isDomainFoodNutritional: TypeGuard<DomainFoodNutritional>;
export declare const assertDomainFoodNutritional: TypeAssert<DomainFoodNutritional>;
