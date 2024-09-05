"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeFood = exports.isDomainCompositeFood = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../entity");
const isDomainCompositeFood = function (data) {
    return !(!(0, entity_1.isDomainFood)(data) ||
        !(0, types_kit_1.isArray)(data['marks'], entity_1.isDomainMark) ||
        !(0, types_kit_1.isArray)(data['categories'], entity_1.isDomainCategory) ||
        !(0, types_kit_1.isArray)(data['bases'], entity_1.isDomainFoodBase) ||
        !(0, types_kit_1.isArray)(data['sizes'], entity_1.isDomainFoodSize) ||
        !(0, types_kit_1.isArray)(data['additionals'], entity_1.isDomainFoodAdditional) ||
        !(0, types_kit_1.isArray)(data['ingredients'], entity_1.isDomainFoodIngredient));
};
exports.isDomainCompositeFood = isDomainCompositeFood;
const assertDomainCompositeFood = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeFood)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeFood = assertDomainCompositeFood;
