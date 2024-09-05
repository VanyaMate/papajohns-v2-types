"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCategoryUpdateData = exports.isDomainCategoryUpdateData = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainCategoryUpdateData = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isOptional)(data['type'], types_kit_1.isString) ||
        !(0, types_kit_1.isOptional)(data['image'], types_kit_1.isString));
};
exports.isDomainCategoryUpdateData = isDomainCategoryUpdateData;
const assertDomainCategoryUpdateData = function (data, errorMessage) {
    if (!(0, exports.isDomainCategoryUpdateData)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCategoryUpdateData = assertDomainCategoryUpdateData;
