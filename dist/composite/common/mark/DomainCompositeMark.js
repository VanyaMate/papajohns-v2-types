"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeMark = exports.isDomainCompositeMark = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../entity");
const isDomainCompositeMark = function (data) {
    return !(!(0, entity_1.isDomainMark)(data) ||
        !(0, types_kit_1.isArray)(data['foods'], entity_1.isDomainFood));
};
exports.isDomainCompositeMark = isDomainCompositeMark;
const assertDomainCompositeMark = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeMark)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeMark = assertDomainCompositeMark;
