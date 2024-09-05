"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeFoodAdditional = exports.isDomainCompositeFoodAdditional = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../entity");
const isDomainCompositeFoodAdditional = function (data) {
    return !(!(0, entity_1.isDomainFoodAdditional)(data) ||
        !(0, types_kit_1.isArray)(data['bases'], entity_1.isDomainFoodBase) ||
        !(0, types_kit_1.isArray)(data['sizes'], entity_1.isDomainFoodSize) ||
        !(0, types_kit_1.isArray)(data['categories'], entity_1.isDomainCategory));
};
exports.isDomainCompositeFoodAdditional = isDomainCompositeFoodAdditional;
const assertDomainCompositeFoodAdditional = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeFoodAdditional)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeFoodAdditional = assertDomainCompositeFoodAdditional;
