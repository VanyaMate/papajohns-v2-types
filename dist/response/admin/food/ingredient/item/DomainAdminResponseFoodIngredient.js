"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseFoodIngredient = exports.isDomainAdminResponseFoodIngredient = void 0;
const composite_1 = require("../../../../../composite");
const isDomainAdminResponseFoodIngredient = function (data) {
    return (0, composite_1.isDomainCompositeFoodIngredient)(data);
};
exports.isDomainAdminResponseFoodIngredient = isDomainAdminResponseFoodIngredient;
const assertDomainAdminResponseFoodIngredient = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseFoodIngredient)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseFoodIngredient = assertDomainAdminResponseFoodIngredient;
