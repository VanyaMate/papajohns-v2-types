"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLinkFoodBaseToFood = exports.isDomainLinkFoodBaseToFood = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainLinkFoodBaseToFood = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['image']));
};
exports.isDomainLinkFoodBaseToFood = isDomainLinkFoodBaseToFood;
const assertDomainLinkFoodBaseToFood = function (data, errorMessage) {
    if (!(0, exports.isDomainLinkFoodBaseToFood)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainLinkFoodBaseToFood = assertDomainLinkFoodBaseToFood;
