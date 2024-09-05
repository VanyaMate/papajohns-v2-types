"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodAdditionalUpdateData = exports.isDomainFoodAdditionalUpdateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodAdditionalUpdateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isOptional)(data['title'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['image'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['categoryType'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['price'], types_kit_1.isString));
};
exports.isDomainFoodAdditionalUpdateData = isDomainFoodAdditionalUpdateData;
const assertDomainFoodAdditionalUpdateData = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodAdditionalUpdateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodAdditionalUpdateData = assertDomainFoodAdditionalUpdateData;
