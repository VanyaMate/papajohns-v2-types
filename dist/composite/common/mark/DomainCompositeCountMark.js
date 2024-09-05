"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeCountMark = exports.isDomainCompositeCountMark = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../entity");
const isDomainCompositeCountMark = function (data) {
    return !(!(0, entity_1.isDomainMark)(data) ||
        !(0, types_kit_1.isNumber)(data['foods']));
};
exports.isDomainCompositeCountMark = isDomainCompositeCountMark;
const assertDomainCompositeCountMark = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeCountMark)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeCountMark = assertDomainCompositeCountMark;
