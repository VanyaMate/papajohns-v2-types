"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainResponseCategoriesList = exports.isDomainResponseCategoriesList = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../../entity");
const isDomainResponseCategoriesList = function (data) {
    return (0, types_kit_1.isArray)(data, entity_1.isDomainCategory);
};
exports.isDomainResponseCategoriesList = isDomainResponseCategoriesList;
const assertDomainResponseCategoriesList = function (data, errorMessage) {
    if (!(0, exports.isDomainResponseCategoriesList)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainResponseCategoriesList = assertDomainResponseCategoriesList;
