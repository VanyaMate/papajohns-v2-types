import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategory } from '../../../../entity';
export type DomainResponseCategoriesList = Array<DomainCategory>;
export declare const isDomainResponseCategoriesList: TypeGuard<DomainResponseCategoriesList>;
export declare const assertDomainResponseCategoriesList: TypeAssert<DomainResponseCategoriesList>;
