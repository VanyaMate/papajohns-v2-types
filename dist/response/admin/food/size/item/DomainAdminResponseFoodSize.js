"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseFoodSize = exports.isDomainAdminResponseFoodSize = void 0;
const composite_1 = require("../../../../../composite");
const isDomainAdminResponseFoodSize = function (data) {
    return (0, composite_1.isDomainCompositeFoodSize)(data);
};
exports.isDomainAdminResponseFoodSize = isDomainAdminResponseFoodSize;
const assertDomainAdminResponseFoodSize = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseFoodSize)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseFoodSize = assertDomainAdminResponseFoodSize;
