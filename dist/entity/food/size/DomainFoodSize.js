"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodSize = exports.isDomainFoodSize = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodSize = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['id']) ||
        !(0, types_kit_1.isString)(data['title']) ||
        !(0, types_kit_1.isString)(data['image']) ||
        !(0, types_kit_1.isNumber)(data['multiplier']));
};
exports.isDomainFoodSize = isDomainFoodSize;
const assertDomainFoodSize = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodSize)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodSize = assertDomainFoodSize;
