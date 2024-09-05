import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategoryType } from '../../common/category/DomainCategory';
export type DomainFoodBaseCreateData = {
    title: string;
    image: string;
    price: number;
    categoryType: Array<DomainCategoryType>;
};
export declare const isDomainFoodBaseCreateData: TypeGuard<DomainFoodBaseCreateData>;
export declare const assertDomainFoodBaseCreateData: TypeAssert<DomainFoodBaseCreateData>;
