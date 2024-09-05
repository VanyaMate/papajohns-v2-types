"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeCountCategory = exports.isDomainCompositeCountCategory = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../entity");
const isDomainCompositeCountCategory = function (data) {
    return !(!(0, entity_1.isDomainCategory)(data) ||
        !(0, types_kit_1.isNumber)(data['foods']) ||
        !(0, types_kit_1.isNumber)(data['ingredients']) ||
        !(0, types_kit_1.isNumber)(data['bases']) ||
        !(0, types_kit_1.isNumber)(data['sizes']) ||
        !(0, types_kit_1.isNumber)(data['additionals']));
};
exports.isDomainCompositeCountCategory = isDomainCompositeCountCategory;
const assertDomainCompositeCountCategory = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeCountCategory)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeCountCategory = assertDomainCompositeCountCategory;
