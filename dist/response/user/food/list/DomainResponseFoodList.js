"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainResponseFoodList = exports.isDomainResponseFoodList = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const DomainResponseFoodCategoryList_1 = require("../item/DomainResponseFoodCategoryList");
const isDomainResponseFoodList = function (data) {
    return (0, types_kit_1.isArray)(data, DomainResponseFoodCategoryList_1.isDomainResponseFoodCategoryList);
};
exports.isDomainResponseFoodList = isDomainResponseFoodList;
const assertDomainResponseFoodList = function (data, errorMessage) {
    if (!(0, exports.isDomainResponseFoodList)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainResponseFoodList = assertDomainResponseFoodList;
