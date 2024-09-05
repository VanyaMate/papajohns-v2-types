"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeCountFood = exports.isDomainCompositeCountFood = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../entity");
const isDomainCompositeCountFood = function (data) {
    return !(!(0, entity_1.isDomainFood)(data) ||
        !(0, types_kit_1.isNumber)(data['marks']) ||
        !(0, types_kit_1.isNumber)(data['categories']) ||
        !(0, types_kit_1.isNumber)(data['bases']) ||
        !(0, types_kit_1.isNumber)(data['sizes']) ||
        !(0, types_kit_1.isNumber)(data['additionals']) ||
        !(0, types_kit_1.isNumber)(data['ingredients']));
};
exports.isDomainCompositeCountFood = isDomainCompositeCountFood;
const assertDomainCompositeCountFood = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeCountFood)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeCountFood = assertDomainCompositeCountFood;
