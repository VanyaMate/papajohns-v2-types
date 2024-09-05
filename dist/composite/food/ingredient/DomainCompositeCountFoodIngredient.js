"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeCountFoodIngredient = exports.isDomainCompositeCountFoodIngredient = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../entity");
const isDomainCompositeCountFoodIngredient = function (data) {
    return !(!(0, entity_1.isDomainFoodIngredient)(data) ||
        !(0, types_kit_1.isNumber)(data['foods']) ||
        !(0, types_kit_1.isNumber)(data['categories']));
};
exports.isDomainCompositeCountFoodIngredient = isDomainCompositeCountFoodIngredient;
const assertDomainCompositeCountFoodIngredient = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeCountFoodIngredient)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeCountFoodIngredient = assertDomainCompositeCountFoodIngredient;
