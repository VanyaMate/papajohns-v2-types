"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeFoodBase = exports.isDomainCompositeFoodBase = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../entity");
const isDomainCompositeFoodBase = function (data) {
    return !(!(0, entity_1.isDomainFoodBase)(data) ||
        !(0, types_kit_1.isArray)(data['foods'], entity_1.isDomainFood) ||
        !(0, types_kit_1.isArray)(data['sizes'], entity_1.isDomainFoodSize) ||
        !(0, types_kit_1.isArray)(data['additionals'], entity_1.isDomainFoodAdditional) ||
        !(0, types_kit_1.isArray)(data['categories'], entity_1.isDomainCategory));
};
exports.isDomainCompositeFoodBase = isDomainCompositeFoodBase;
const assertDomainCompositeFoodBase = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeFoodBase)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeFoodBase = assertDomainCompositeFoodBase;
