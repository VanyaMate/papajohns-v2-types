"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainMarkCreateData = exports.isDomainMarkCreateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainMarkCreateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['title']) ||
        !(0, types_kit_1.isString)(data['color']));
};
exports.isDomainMarkCreateData = isDomainMarkCreateData;
const assertDomainMarkCreateData = function (data, errorMessage) {
    if (!(0, exports.isDomainMarkCreateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainMarkCreateData = assertDomainMarkCreateData;
