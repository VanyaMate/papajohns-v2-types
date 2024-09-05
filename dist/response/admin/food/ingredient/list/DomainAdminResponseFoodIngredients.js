"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAdminResponseFoodIngredients = exports.isDomainAdminResponseFoodIngredients = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const composite_1 = require("../../../../../composite");
const isDomainAdminResponseFoodIngredients = function (data) {
    return (0, types_kit_1.isArray)(data, composite_1.isDomainCompositeCountFoodIngredient);
};
exports.isDomainAdminResponseFoodIngredients = isDomainAdminResponseFoodIngredients;
const assertDomainAdminResponseFoodIngredients = function (data, errorMessage) {
    if (!(0, exports.isDomainAdminResponseFoodIngredients)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainAdminResponseFoodIngredients = assertDomainAdminResponseFoodIngredients;
