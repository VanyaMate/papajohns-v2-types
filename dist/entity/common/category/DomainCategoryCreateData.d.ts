import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategoryType } from './DomainCategory';
export type DomainCategoryCreateData = {
    type: DomainCategoryType;
    image: string;
};
export declare const isDomainCategoryCreateData: TypeGuard<DomainCategoryCreateData>;
export declare const assertDomainCategoryCreateData: TypeAssert<DomainCategoryCreateData>;
