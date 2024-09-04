import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodCategoryType } from '../food-category/DomainFoodCategory';
export type DomainFoodBaseUpdateData = {
    title?: string;
    image?: string;
    price?: number;
    categoryType?: Array<DomainFoodCategoryType>;
};
export declare const isDomainFoodBaseUpdateData: TypeGuard<DomainFoodBaseUpdateData>;
export declare const assertDomainFoodBaseUpdateData: TypeAssert<DomainFoodBaseUpdateData>;
