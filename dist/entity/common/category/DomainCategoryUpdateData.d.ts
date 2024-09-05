import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategoryType } from './DomainCategory';
export type DomainCategoryUpdateData = {
    type?: DomainCategoryType;
    image?: string;
};
export declare const isDomainCategoryUpdateData: TypeGuard<DomainCategoryUpdateData>;
export declare const assertDomainCategoryUpdateData: TypeAssert<DomainCategoryUpdateData>;
