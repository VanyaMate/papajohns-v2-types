"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseFoods = exports.isDomainAdminResponseFoods = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const composite_1 = require("../../../composite");
const isDomainAdminResponseFoods = function (data) {
    return (0, types_kit_1.isArray)(data, composite_1.isDomainCompositeCountFood);
};
exports.isDomainAdminResponseFoods = isDomainAdminResponseFoods;
const assertDomainAdminResponseFoods = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseFoods)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseFoods = assertDomainAdminResponseFoods;
