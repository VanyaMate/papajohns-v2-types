import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export declare enum DomainFoodCategoryType {
    PIZZA = "pizza",
    COFFEE = "coffee"
}
export type DomainFoodCategory = {
    id: string;
    type: DomainFoodCategoryType;
    image: string;
};
export declare const isDomainFoodCategory: TypeGuard<DomainFoodCategory>;
export declare const assertDomainFoodCategory: TypeAssert<DomainFoodCategory>;
