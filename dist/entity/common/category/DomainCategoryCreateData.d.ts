import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodCategoryType } from './DomainCategory';
export type DomainCategoryCreateData = {
    type: DomainFoodCategoryType;
    image: string;
};
export declare const isDomainCategoryCreateData: TypeGuard<DomainCategoryCreateData>;
export declare const assertDomainCategoryCreateData: TypeAssert<DomainCategoryCreateData>;
