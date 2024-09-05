"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeFoodIngredient = exports.isDomainCompositeFoodIngredient = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../entity");
const isDomainCompositeFoodIngredient = function (data) {
    return !(!(0, entity_1.isDomainFoodIngredient)(data) ||
        !(0, types_kit_1.isArray)(data['foods'], entity_1.isDomainFood) ||
        !(0, types_kit_1.isArray)(data['categories'], entity_1.isDomainCategory));
};
exports.isDomainCompositeFoodIngredient = isDomainCompositeFoodIngredient;
const assertDomainCompositeFoodIngredient = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeFoodIngredient)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeFoodIngredient = assertDomainCompositeFoodIngredient;
