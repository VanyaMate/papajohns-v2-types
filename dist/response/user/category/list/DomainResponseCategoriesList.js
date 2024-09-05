import { isArray, } from '@vanyamate/types-kit';
import { isDomainCategory } from '../../../../entity';
export const isDomainResponseCategoriesList = function (data) {
    return isArray(data, isDomainCategory);
};
export const assertDomainResponseCategoriesList = function (data, errorMessage) {
    if (!isDomainResponseCategoriesList(data)) {
        throw errorMessage(data);
    }
};
