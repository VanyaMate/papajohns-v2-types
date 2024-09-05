"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodIngredientCreateData = exports.isDomainFoodIngredientCreateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodIngredientCreateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['title']) ||
        !(0, types_kit_1.isString)(data['image']) ||
        !(0, types_kit_1.isString)(data['postfix']) ||
        !(0, types_kit_1.isArray)(data['categoryType'], types_kit_1.isString) ||
        !(0, types_kit_1.isNumber)(data['price']) ||
        !(0, types_kit_1.isNumber)(data['amount']));
};
exports.isDomainFoodIngredientCreateData = isDomainFoodIngredientCreateData;
const assertDomainFoodIngredientCreateData = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodIngredientCreateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodIngredientCreateData = assertDomainFoodIngredientCreateData;
