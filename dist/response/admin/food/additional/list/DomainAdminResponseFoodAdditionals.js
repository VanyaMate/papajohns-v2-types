"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseFoodAdditionals = exports.isDomainAdminResponseFoodAdditionals = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const composite_1 = require("../../../../../composite");
const isDomainAdminResponseFoodAdditionals = function (data) {
    return (0, types_kit_1.isArray)(data, composite_1.isDomainCompositeCountFoodAdditional);
};
exports.isDomainAdminResponseFoodAdditionals = isDomainAdminResponseFoodAdditionals;
const assertDomainAdminResponseFoodAdditionals = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseFoodAdditionals)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseFoodAdditionals = assertDomainAdminResponseFoodAdditionals;
