import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFood = {
    id: string;
    title: string;
    image: string;
    description: string;
};
export declare const isDomainFood: TypeGuard<DomainFood>;
export declare const assertDomainFood: TypeAssert<DomainFood>;
