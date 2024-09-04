import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodCategoryType } from './DomainFoodCategory';
export type DomainFoodCategoryCreateData = {
    type: DomainFoodCategoryType;
    image: string;
};
export declare const isDomainFoodCategoryCreateData: TypeGuard<DomainFoodCategoryCreateData>;
export declare const assertDomainFoodCategoryCreateData: TypeAssert<DomainFoodCategoryCreateData>;
