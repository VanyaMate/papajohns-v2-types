"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseMark = exports.isDomainAdminResponseMark = void 0;
const composite_1 = require("../../../../../composite");
const isDomainAdminResponseMark = function (data) {
    return (0, composite_1.isDomainCompositeMark)(data);
};
exports.isDomainAdminResponseMark = isDomainAdminResponseMark;
const assertDomainAdminResponseMark = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseMark)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseMark = assertDomainAdminResponseMark;
