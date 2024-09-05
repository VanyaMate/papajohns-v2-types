import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategoryType } from '../../common/category/DomainCategory';
export type DomainFoodAdditionalUpdateData = {
    title?: string;
    image?: string;
    price?: number;
    categoryType?: DomainCategoryType;
};
export declare const isDomainFoodAdditionalUpdateData: TypeGuard<DomainFoodAdditionalUpdateData>;
export declare const assertDomainFoodAdditionalUpdateData: TypeAssert<DomainFoodAdditionalUpdateData>;
