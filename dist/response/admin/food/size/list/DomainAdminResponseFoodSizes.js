"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseFoodSizes = exports.isDomainAdminResponseFoodSizes = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const composite_1 = require("../../../../../composite");
const isDomainAdminResponseFoodSizes = function (data) {
    return (0, types_kit_1.isArray)(data, composite_1.isDomainCompositeCountFoodSize);
};
exports.isDomainAdminResponseFoodSizes = isDomainAdminResponseFoodSizes;
const assertDomainAdminResponseFoodSizes = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseFoodSizes)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseFoodSizes = assertDomainAdminResponseFoodSizes;
