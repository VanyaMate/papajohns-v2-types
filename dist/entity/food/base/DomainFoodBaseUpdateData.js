"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodBaseUpdateData = exports.isDomainFoodBaseUpdateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodBaseUpdateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isOptional)(data['title'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['image'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['price'], types_kit_1.isNumber) ||
        !(0, types_kit_1.isOptional)(data['categoryType'], (value) => (0, types_kit_1.isArray)(value, types_kit_1.isString)));
};
exports.isDomainFoodBaseUpdateData = isDomainFoodBaseUpdateData;
const assertDomainFoodBaseUpdateData = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodBaseUpdateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodBaseUpdateData = assertDomainFoodBaseUpdateData;
