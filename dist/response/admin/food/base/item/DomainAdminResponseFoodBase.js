"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseFoodBase = exports.isDomainAdminResponseFoodBase = void 0;
const composite_1 = require("../../../../../composite");
const isDomainAdminResponseFoodBase = function (data) {
    return (0, composite_1.isDomainCompositeFoodBase)(data);
};
exports.isDomainAdminResponseFoodBase = isDomainAdminResponseFoodBase;
const assertDomainAdminResponseFoodBase = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseFoodBase)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseFoodBase = assertDomainAdminResponseFoodBase;
