import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodCategoryType } from './DomainFoodCategory';
export type DomainFoodCategoryUpdateData = {
    type?: DomainFoodCategoryType;
    image?: string;
};
export declare const isDomainFoodCategoryUpdateData: TypeGuard<DomainFoodCategoryUpdateData>;
export declare const assertDomainFoodCategoryUpdateData: TypeAssert<DomainFoodCategoryUpdateData>;
