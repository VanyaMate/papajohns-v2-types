"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodAdditionalCreateData = exports.isDomainFoodAdditionalCreateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodAdditionalCreateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['title']) ||
        !(0, types_kit_1.isString)(data['image']) ||
        !(0, types_kit_1.isString)(data['categoryType']) ||
        !(0, types_kit_1.isNumber)(data['price']));
};
exports.isDomainFoodAdditionalCreateData = isDomainFoodAdditionalCreateData;
const assertDomainFoodAdditionalCreateData = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodAdditionalCreateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodAdditionalCreateData = assertDomainFoodAdditionalCreateData;
