import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCompositeFood, DomainCategory } from '../../../../index';
export type DomainResponseFoodCategoryList = {
    category: DomainCategory;
    list: Array<DomainCompositeFood>;
};
export declare const isDomainResponseFoodCategoryList: TypeGuard<DomainResponseFoodCategoryList>;
export declare const assertDomainResponseFoodCategoryList: TypeAssert<DomainResponseFoodCategoryList>;
