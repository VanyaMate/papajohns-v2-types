"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodIngredient = exports.isDomainFoodIngredient = exports.DomainFoodIngredientPostfix = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
var DomainFoodIngredientPostfix;
(function (DomainFoodIngredientPostfix) {
    DomainFoodIngredientPostfix["GRAMME"] = "gramme";
    DomainFoodIngredientPostfix["EACH"] = "each";
    DomainFoodIngredientPostfix["MILLILITER"] = "milliliter";
})(DomainFoodIngredientPostfix || (exports.DomainFoodIngredientPostfix = DomainFoodIngredientPostfix = {}));
const isDomainFoodIngredient = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['id']) ||
        !(0, types_kit_1.isString)(data['title']) ||
        !(0, types_kit_1.isString)(data['image']) ||
        !(0, types_kit_1.isString)(data['postfix']) ||
        !(0, types_kit_1.isNumber)(data['price']) ||
        !(0, types_kit_1.isNumber)(data['amount']));
};
exports.isDomainFoodIngredient = isDomainFoodIngredient;
const assertDomainFoodIngredient = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodIngredient)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodIngredient = assertDomainFoodIngredient;
