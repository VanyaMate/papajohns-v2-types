"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeCountFoodBase = exports.isDomainCompositeCountFoodBase = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../entity");
const isDomainCompositeCountFoodBase = function (data) {
    return !(!(0, entity_1.isDomainFoodBase)(data) ||
        !(0, types_kit_1.isNumber)(data['foods']) ||
        !(0, types_kit_1.isNumber)(data['sizes']) ||
        !(0, types_kit_1.isNumber)(data['additionals']) ||
        !(0, types_kit_1.isNumber)(data['categories']));
};
exports.isDomainCompositeCountFoodBase = isDomainCompositeCountFoodBase;
const assertDomainCompositeCountFoodBase = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeCountFoodBase)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeCountFoodBase = assertDomainCompositeCountFoodBase;
