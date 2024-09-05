import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodCategoryType } from './DomainCategory';
export type DomainCategoryUpdateData = {
    type?: DomainFoodCategoryType;
    image?: string;
};
export declare const isDomainCategoryUpdateData: TypeGuard<DomainCategoryUpdateData>;
export declare const assertDomainCategoryUpdateData: TypeAssert<DomainCategoryUpdateData>;
