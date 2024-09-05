"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseMarks = exports.isDomainAdminResponseMarks = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const composite_1 = require("../../../../../composite");
const isDomainAdminResponseMarks = function (data) {
    return (0, types_kit_1.isArray)(data, composite_1.isDomainCompositeCountMark);
};
exports.isDomainAdminResponseMarks = isDomainAdminResponseMarks;
const assertDomainAdminResponseMarks = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseMarks)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseMarks = assertDomainAdminResponseMarks;
