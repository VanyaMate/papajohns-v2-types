"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFood = exports.isDomainFood = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFood = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['id']) ||
        !(0, types_kit_1.isString)(data['title']) ||
        !(0, types_kit_1.isString)(data['image']) ||
        !(0, types_kit_1.isString)(data['description']));
};
exports.isDomainFood = isDomainFood;
const assertDomainFood = function (data, errorMessage) {
    if (!(0, exports.isDomainFood)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFood = assertDomainFood;
