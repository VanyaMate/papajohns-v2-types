import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainResponseFoodCategoryList } from '../item/DomainResponseFoodCategoryList';
export type DomainResponseFoodList = Array<DomainResponseFoodCategoryList>;
export declare const isDomainResponseFoodList: TypeGuard<DomainResponseFoodList>;
export declare const assertDomainResponseFoodList: TypeAssert<DomainResponseFoodList>;
