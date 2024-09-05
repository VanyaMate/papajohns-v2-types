"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainMarkUpdateData = exports.isDomainMarkUpdateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainMarkUpdateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isOptional)(data['title'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['color'], types_kit_1.isString));
};
exports.isDomainMarkUpdateData = isDomainMarkUpdateData;
const assertDomainMarkUpdateData = function (data, errorMessage) {
    if (!(0, exports.isDomainMarkUpdateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainMarkUpdateData = assertDomainMarkUpdateData;
