"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLinkFoodSizeToFoodBase = exports.isDomainLinkFoodSizeToFoodBase = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainLinkFoodSizeToFoodBase = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['image']));
};
exports.isDomainLinkFoodSizeToFoodBase = isDomainLinkFoodSizeToFoodBase;
const assertDomainLinkFoodSizeToFoodBase = function (data, errorMessage) {
    if (!(0, exports.isDomainLinkFoodSizeToFoodBase)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainLinkFoodSizeToFoodBase = assertDomainLinkFoodSizeToFoodBase;
