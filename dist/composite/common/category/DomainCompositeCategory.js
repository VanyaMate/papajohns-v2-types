"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeCategory = exports.isDomainCompositeCategory = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../entity");
const isDomainCompositeCategory = function (data) {
    return !(!(0, entity_1.isDomainCategory)(data) ||
        !(0, types_kit_1.isArray)(data['foods'], entity_1.isDomainFood) ||
        !(0, types_kit_1.isArray)(data['ingredients'], entity_1.isDomainFoodIngredient) ||
        !(0, types_kit_1.isArray)(data['bases'], entity_1.isDomainFoodBase) ||
        !(0, types_kit_1.isArray)(data['sizes'], entity_1.isDomainFoodSize) ||
        !(0, types_kit_1.isArray)(data['additionals'], entity_1.isDomainFoodAdditional));
};
exports.isDomainCompositeCategory = isDomainCompositeCategory;
const assertDomainCompositeCategory = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeCategory)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeCategory = assertDomainCompositeCategory;
