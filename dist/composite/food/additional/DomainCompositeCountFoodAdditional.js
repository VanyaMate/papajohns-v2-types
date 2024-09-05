"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeCountFoodAdditional = exports.isDomainCompositeCountFoodAdditional = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../entity");
const isDomainCompositeCountFoodAdditional = function (data) {
    return !(!(0, entity_1.isDomainFoodAdditional)(data) ||
        !(0, types_kit_1.isNumber)(data['bases']) ||
        !(0, types_kit_1.isNumber)(data['sizes']) ||
        !(0, types_kit_1.isNumber)(data['categories']));
};
exports.isDomainCompositeCountFoodAdditional = isDomainCompositeCountFoodAdditional;
const assertDomainCompositeCountFoodAdditional = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeCountFoodAdditional)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeCountFoodAdditional = assertDomainCompositeCountFoodAdditional;
