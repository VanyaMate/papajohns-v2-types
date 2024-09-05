"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodIngredientUpdateData = exports.isDomainFoodIngredientUpdateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodIngredientUpdateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isOptional)(data['title'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['image'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['postfix'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['price'], types_kit_1.isNumber) ||
        !(0, types_kit_1.isOptional)(data['amount'], types_kit_1.isNumber));
};
exports.isDomainFoodIngredientUpdateData = isDomainFoodIngredientUpdateData;
const assertDomainFoodIngredientUpdateData = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodIngredientUpdateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodIngredientUpdateData = assertDomainFoodIngredientUpdateData;
