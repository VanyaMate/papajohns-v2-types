import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodCategoryType } from '../../common/category/DomainCategory';
export type DomainFoodAdditionalUpdateData = {
    title?: string;
    image?: string;
    price?: number;
    categoryType?: DomainFoodCategoryType;
};
export declare const isDomainFoodAdditionalUpdateData: TypeGuard<DomainFoodAdditionalUpdateData>;
export declare const assertDomainFoodAdditionalUpdateData: TypeAssert<DomainFoodAdditionalUpdateData>;
