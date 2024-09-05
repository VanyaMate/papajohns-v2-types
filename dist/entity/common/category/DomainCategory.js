"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCategory = exports.isDomainCategory = exports.DomainCategoryType = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
var DomainCategoryType;
(function (DomainCategoryType) {
    DomainCategoryType["PIZZA"] = "pizza";
    DomainCategoryType["COFFEE"] = "coffee";
})(DomainCategoryType || (exports.DomainCategoryType = DomainCategoryType = {}));
const isDomainCategory = function (data) {
    return !(!(0, types_kit_1.isObject)(data) ||
        !(0, types_kit_1.isString)(data['id']) ||
        !(0, types_kit_1.isString)(data['type']) ||
        !(0, types_kit_1.isString)(data['image']));
};
exports.isDomainCategory = isDomainCategory;
const assertDomainCategory = function (data, errorMessage) {
    if (!(0, exports.isDomainCategory)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCategory = assertDomainCategory;
