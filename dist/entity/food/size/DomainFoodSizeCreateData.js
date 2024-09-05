"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodSizeCreateData = exports.isDomainFoodSizeCreateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodSizeCreateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['title']) ||
        !(0, types_kit_1.isString)(data['image']) ||
        !(0, types_kit_1.isNumber)(data['multiplier']) ||
        !(0, types_kit_1.isString)(data['baseId']));
};
exports.isDomainFoodSizeCreateData = isDomainFoodSizeCreateData;
const assertDomainFoodSizeCreateData = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodSizeCreateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodSizeCreateData = assertDomainFoodSizeCreateData;
