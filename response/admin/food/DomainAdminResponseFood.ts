import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';
import { DomainCompositeFood, isDomainCompositeFood } from '../../../composite';


export type DomainAdminResponseFood = DomainCompositeFood;

export const isDomainAdminResponseFood: TypeGuard<DomainAdminResponseFood> = function (data): data is DomainAdminResponseFood {
    return isDomainCompositeFood(data);
};

export const assertDomainAdminResponseFood: TypeAssert<DomainAdminResponseFood> = function (data, errorMessage) {
    if (!isDomainAdminResponseFood(data)) {
        throw errorMessage(data);
    }
};