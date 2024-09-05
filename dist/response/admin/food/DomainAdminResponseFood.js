"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseFood = exports.isDomainAdminResponseFood = void 0;
const composite_1 = require("../../../composite");
const isDomainAdminResponseFood = function (data) {
    return (0, composite_1.isDomainCompositeFood)(data);
};
exports.isDomainAdminResponseFood = isDomainAdminResponseFood;
const assertDomainAdminResponseFood = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseFood)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseFood = assertDomainAdminResponseFood;
