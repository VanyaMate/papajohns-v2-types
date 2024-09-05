import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainMarkUpdateData = {
    title?: string;
    color?: string;
};
export declare const isDomainMarkUpdateData: TypeGuard<DomainMarkUpdateData>;
export declare const assertDomainMarkUpdateData: TypeAssert<DomainMarkUpdateData>;
