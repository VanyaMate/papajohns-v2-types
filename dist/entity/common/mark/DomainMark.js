"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainMark = exports.isDomainMark = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainMark = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['id']) ||
        !(0, types_kit_1.isString)(data['title']) ||
        !(0, types_kit_1.isString)(data['color']));
};
exports.isDomainMark = isDomainMark;
const assertDomainMark = function (data, errorMessage) {
    if (!(0, exports.isDomainMark)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainMark = assertDomainMark;
