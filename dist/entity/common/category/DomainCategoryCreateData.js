"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCategoryCreateData = exports.isDomainCategoryCreateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainCategoryCreateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['type']) ||
        !(0, types_kit_1.isString)(data['image']));
};
exports.isDomainCategoryCreateData = isDomainCategoryCreateData;
const assertDomainCategoryCreateData = function (data, errorMessage) {
    if (!(0, exports.isDomainCategoryCreateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCategoryCreateData = assertDomainCategoryCreateData;
