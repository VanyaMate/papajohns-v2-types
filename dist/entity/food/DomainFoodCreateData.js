"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFoodCreateData = exports.isDomainFoodCreateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainFoodCreateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['title']) ||
        !(0, types_kit_1.isString)(data['image']) ||
        !(0, types_kit_1.isString)(data['description']));
};
exports.isDomainFoodCreateData = isDomainFoodCreateData;
const assertDomainFoodCreateData = function (data, errorMessage) {
    if (!(0, exports.isDomainFoodCreateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainFoodCreateData = assertDomainFoodCreateData;
