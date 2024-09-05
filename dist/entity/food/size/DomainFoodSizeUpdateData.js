"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodSizeUpdateData = exports.isDomainFoodSizeUpdateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodSizeUpdateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isOptional)(data['title'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['image'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['baseId'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['multiplier'], types_kit_1.isNumber));
};
exports.isDomainFoodSizeUpdateData = isDomainFoodSizeUpdateData;
const assertDomainFoodSizeUpdateData = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodSizeUpdateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodSizeUpdateData = assertDomainFoodSizeUpdateData;
