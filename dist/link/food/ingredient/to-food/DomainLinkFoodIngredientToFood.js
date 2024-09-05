"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLinkFoodIngredientToFood = exports.isDomainLinkFoodIngredientToFood = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainLinkFoodIngredientToFood = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['field']));
};
exports.isDomainLinkFoodIngredientToFood = isDomainLinkFoodIngredientToFood;
const assertDomainLinkFoodIngredientToFood = function (data, errorMessage) {
    if (!(0, exports.isDomainLinkFoodIngredientToFood)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainLinkFoodIngredientToFood = assertDomainLinkFoodIngredientToFood;
