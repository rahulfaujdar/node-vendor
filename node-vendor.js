"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = exports.paginate = void 0;
var paginate = function (_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, limit = _a.limit, page = _a.page;
    var total = data.length;
    var _data;
    if (limit && !page) {
        _data = data.slice(0, limit);
    }
    else if (!limit && page) {
        var offset = 10 * (page - 1);
        _data = data.slice(offset, offset + 10);
    }
    else if (limit && page) {
        var offset = limit * (page - 1);
        _data = data.slice(offset, offset + Number(limit));
    }
    else {
        _data = data;
    }
    return {
        data: _data,
        total: total
    };
};
exports.paginate = paginate;
var Response = function (_a) {
    var type = _a.type, message = _a.message, data = _a.data;
    return {
        type: type,
        message: message,
        data: data
    };
};
exports.Response = Response;
