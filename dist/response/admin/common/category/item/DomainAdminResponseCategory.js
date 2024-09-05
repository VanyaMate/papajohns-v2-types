"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseCategory = exports.isDomainAdminResponseCategory = void 0;
const composite_1 = require("../../../../../composite");
const isDomainAdminResponseCategory = function (data) {
    return (0, composite_1.isDomainCompositeCategory)(data);
};
exports.isDomainAdminResponseCategory = isDomainAdminResponseCategory;
const assertDomainAdminResponseCategory = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseCategory)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseCategory = assertDomainAdminResponseCategory;
