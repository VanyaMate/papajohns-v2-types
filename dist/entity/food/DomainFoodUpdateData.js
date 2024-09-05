"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodUpdateData = exports.isDomainFoodUpdateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodUpdateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isOptional)(data['title'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['image'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['description'], types_kit_1.isString));
};
exports.isDomainFoodUpdateData = isDomainFoodUpdateData;
const assertDomainFoodUpdateData = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodUpdateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodUpdateData = assertDomainFoodUpdateData;
