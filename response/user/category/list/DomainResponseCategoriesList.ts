import {
    TypeGuard,
    TypeAssert,
    isArray,
} from '@vanyamate/types-kit';
import { DomainCategory, isDomainCategory } from '../../../../entity';


export type DomainResponseCategoriesList = Array<DomainCategory>;

export const isDomainResponseCategoriesList: TypeGuard<DomainResponseCategoriesList> = function (data): data is DomainResponseCategoriesList {
    return isArray(data, isDomainCategory);
};

export const assertDomainResponseCategoriesList: TypeAssert<DomainResponseCategoriesList> = function (data, errorMessage) {
    if (!isDomainResponseCategoriesList(data)) {
        throw errorMessage(data);
    }
};