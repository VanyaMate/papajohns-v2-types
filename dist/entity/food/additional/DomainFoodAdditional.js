"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodAdditional = exports.isDomainFoodAdditional = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodAdditional = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['id']) ||
        !(0, types_kit_1.isString)(data['title']) ||
        !(0, types_kit_1.isString)(data['image']) ||
        !(0, types_kit_1.isNumber)(data['price']));
};
exports.isDomainFoodAdditional = isDomainFoodAdditional;
const assertDomainFoodAdditional = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodAdditional)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodAdditional = assertDomainFoodAdditional;
