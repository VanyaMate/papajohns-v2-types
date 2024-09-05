"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainResponseFoodCategoryList = exports.isDomainResponseFoodCategoryList = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const index_1 = require("../../../../index");
const isDomainResponseFoodCategoryList = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, index_1.isDomainCategory)(data['category']) ||
        !(0, types_kit_1.isArray)(data['list'], index_1.isDomainCompositeFood));
};
exports.isDomainResponseFoodCategoryList = isDomainResponseFoodCategoryList;
const assertDomainResponseFoodCategoryList = function (data, errorMessage) {
    if (!(0, exports.isDomainResponseFoodCategoryList)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainResponseFoodCategoryList = assertDomainResponseFoodCategoryList;
