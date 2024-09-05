import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodCategoryType } from '../../common/category/DomainCategory';
export type DomainFoodBaseCreateData = {
    title: string;
    image: string;
    price: number;
    categoryType: Array<DomainFoodCategoryType>;
};
export declare const isDomainFoodBaseCreateData: TypeGuard<DomainFoodBaseCreateData>;
export declare const assertDomainFoodBaseCreateData: TypeAssert<DomainFoodBaseCreateData>;
