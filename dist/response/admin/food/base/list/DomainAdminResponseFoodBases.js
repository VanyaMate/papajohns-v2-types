"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseFoodBases = exports.isDomainAdminResponseFoodBases = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const composite_1 = require("../../../../../composite");
const isDomainAdminResponseFoodBases = function (data) {
    return (0, types_kit_1.isArray)(data, composite_1.isDomainCompositeCountFoodBase);
};
exports.isDomainAdminResponseFoodBases = isDomainAdminResponseFoodBases;
const assertDomainAdminResponseFoodBases = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseFoodBases)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseFoodBases = assertDomainAdminResponseFoodBases;
