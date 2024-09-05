"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeFoodSize = exports.isDomainCompositeFoodSize = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../entity");
const isDomainCompositeFoodSize = function (data) {
    return !(!(0, entity_1.isDomainFoodSize)(data) ||
        !(0, types_kit_1.isArray)(data['bases'], entity_1.isDomainFoodBase) ||
        !(0, types_kit_1.isArray)(data['additionals'], entity_1.isDomainFoodAdditional) ||
        !(0, types_kit_1.isArray)(data['categories'], entity_1.isDomainCategory));
};
exports.isDomainCompositeFoodSize = isDomainCompositeFoodSize;
const assertDomainCompositeFoodSize = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeFoodSize)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeFoodSize = assertDomainCompositeFoodSize;
