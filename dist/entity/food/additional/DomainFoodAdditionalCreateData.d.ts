import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodCategoryType } from '../../common/category/DomainCategory';
export type DomainFoodAdditionalCreateData = {
    title: string;
    image: string;
    price: number;
    categoryType: DomainFoodCategoryType;
};
export declare const isDomainFoodAdditionalCreateData: TypeGuard<DomainFoodAdditionalCreateData>;
export declare const assertDomainFoodAdditionalCreateData: TypeAssert<DomainFoodAdditionalCreateData>;
