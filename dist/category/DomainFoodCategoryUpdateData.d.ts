import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodCategoryUpdateData = {
    title?: string;
    image?: string;
};
export declare const isDomainFoodCategoryUpdateData: TypeGuard<DomainFoodCategoryUpdateData>;
export declare const assertDomainFoodCategoryUpdateData: TypeAssert<DomainFoodCategoryUpdateData>;
