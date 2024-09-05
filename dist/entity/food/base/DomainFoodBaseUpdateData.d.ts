import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategoryType } from '../../common/category/DomainCategory';
export type DomainFoodBaseUpdateData = {
    title?: string;
    image?: string;
    price?: number;
    categoryType?: Array<DomainCategoryType>;
};
export declare const isDomainFoodBaseUpdateData: TypeGuard<DomainFoodBaseUpdateData>;
export declare const assertDomainFoodBaseUpdateData: TypeAssert<DomainFoodBaseUpdateData>;
