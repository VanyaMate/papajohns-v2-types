"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCompositeCountFoodSize = exports.isDomainCompositeCountFoodSize = void 0;
const types_kit_1 = require("@vanyamate/types-kit");
const entity_1 = require("../../../entity");
const isDomainCompositeCountFoodSize = function (data) {
    return !(!(0, entity_1.isDomainFoodSize)(data) ||
        !(0, types_kit_1.isNumber)(data['bases']) ||
        !(0, types_kit_1.isNumber)(data['additionals']) ||
        !(0, types_kit_1.isNumber)(data['categories']));
};
exports.isDomainCompositeCountFoodSize = isDomainCompositeCountFoodSize;
const assertDomainCompositeCountFoodSize = function (data, errorMessage) {
    if (!(0, exports.isDomainCompositeCountFoodSize)(data)) {
        throw errorMessage(data);
    }
};
exports.assertDomainCompositeCountFoodSize = assertDomainCompositeCountFoodSize;
