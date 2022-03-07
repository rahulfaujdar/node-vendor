"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
var paginate = function (data, _a) {
    if (data === void 0) { data = []; }
    var _b = _a === void 0 ? {} : _a, limit = _b.limit, _c = _b.page, page = _c === void 0 ? 0 : _c, _d = _b.offset, offset = _d === void 0 ? 0 : _d;
    var _total = data.length;
    var _offset = page ? limit * (page - 1) : Number(offset);
    var _limit = limit ? _offset + Number(limit) : _total;
    var _data = data.slice(_offset, _limit);
    return {
        data: _data,
        total: _total
    };
};
exports.paginate = paginate;
