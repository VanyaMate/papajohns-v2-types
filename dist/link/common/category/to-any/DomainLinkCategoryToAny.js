"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLinkCategoryToAny = exports.isDomainLinkCategoryToAny = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const isDomainLinkCategoryToAny = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['categoryId']));
};
exports.isDomainLinkCategoryToAny = isDomainLinkCategoryToAny;
const assertDomainLinkCategoryToAny = function (data, errorMessage) {
    if (!(0, exports.isDomainLinkCategoryToAny)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainLinkCategoryToAny = assertDomainLinkCategoryToAny;
