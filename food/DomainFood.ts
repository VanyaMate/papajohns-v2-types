import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';
import { DomainFoodType } from '../type/DomainFoodType';
import { DomainFoodMark } from '../mark/DomainFoodMark';


export type DomainFood = {
    id: string;
    title: string;
    description: string;
    types: Array<DomainFoodType>;
    marks: Array<DomainFoodMark>;
}

export const isDomainFood: TypeGuard<DomainFood> = function (data): data is DomainFood {
    return !(
        !isObject(data) ||
        !isString(data['field'])
    );
};

export const assertDomainFood: TypeAssert<DomainFood> = function (data, errorMessage) {
    if (!isDomainFood(data)) {
        throw errorMessage(data);
    }
};