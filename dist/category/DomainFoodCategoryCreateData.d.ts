import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodCategoryCreateData = {
    title: string;
    image: string;
};
export declare const isDomainFoodCategoryCreateData: TypeGuard<DomainFoodCategoryCreateData>;
export declare const assertDomainFoodCategoryCreateData: TypeAssert<DomainFoodCategoryCreateData>;
