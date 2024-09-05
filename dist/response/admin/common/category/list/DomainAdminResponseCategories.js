"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseCategories = exports.isDomainAdminResponseCategories = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const composite_1 = require("../../../../../composite");
const isDomainAdminResponseCategories = function (data) {
    return (0, types_kit_1.isArray)(data, composite_1.isDomainCompositeCountCategory);
};
exports.isDomainAdminResponseCategories = isDomainAdminResponseCategories;
const assertDomainAdminResponseCategories = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseCategories)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseCategories = assertDomainAdminResponseCategories;
