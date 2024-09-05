import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainMark = {
    id: string;
    title: string;
    color: string;
};
export declare const isDomainMark: TypeGuard<DomainMark>;
export declare const assertDomainMark: TypeAssert<DomainMark>;
