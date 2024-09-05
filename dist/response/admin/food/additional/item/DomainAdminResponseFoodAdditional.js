"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseFoodAdditional = exports.isDomainAdminResponseFoodAdditional = void 0;
const composite_1 = require("../../../../../composite");
const isDomainAdminResponseFoodAdditional = function (data) {
    return (0, composite_1.isDomainCompositeFoodAdditional)(data);
};
exports.isDomainAdminResponseFoodAdditional = isDomainAdminResponseFoodAdditional;
const assertDomainAdminResponseFoodAdditional = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseFoodAdditional)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseFoodAdditional = assertDomainAdminResponseFoodAdditional;
