import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export declare enum DomainFoodCategoryType {
    PIZZA = "pizza",
    COFFEE = "coffee"
}
export type DomainCategory = {
    id: string;
    type: DomainFoodCategoryType;
    image: string;
};
export declare const isDomainCategory: TypeGuard<DomainCategory>;
export declare const assertDomainCategory: TypeAssert<DomainCategory>;
