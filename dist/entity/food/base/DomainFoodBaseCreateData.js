"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodBaseCreateData = exports.isDomainFoodBaseCreateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodBaseCreateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['title']) ||
        !(0, types_kit_1.isString)(data['image']) ||
        !(0, types_kit_1.isNumber)(data['price']) ||
        !(0, types_kit_1.isArray)(data['categoryType'], types_kit_1.isString));
};
exports.isDomainFoodBaseCreateData = isDomainFoodBaseCreateData;
const assertDomainFoodBaseCreateData = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodBaseCreateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodBaseCreateData = assertDomainFoodBaseCreateData;
