"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodBase = exports.isDomainFoodBase = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodBase = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['id']) ||
        !(0, types_kit_1.isString)(data['title']) ||
        !(0, types_kit_1.isString)(data['image']) ||
        !(0, types_kit_1.isNumber)(data['price']));
};
exports.isDomainFoodBase = isDomainFoodBase;
const assertDomainFoodBase = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodBase)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodBase = assertDomainFoodBase;
