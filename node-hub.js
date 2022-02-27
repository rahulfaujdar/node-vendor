"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = exports.Paginate = exports.createServer = void 0;
var http_1 = __importDefault(require("http"));
var createServer = function (port) {
    http_1.default.createServer().listen(port);
};
exports.createServer = createServer;
var Paginate = function (_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, limit = _a.limit, page = _a.page;
    if (limit && !page) {
        return data.slice(0, limit);
    }
    else if (!limit && page) {
        var offset = 10 * (page - 1);
        return data.slice(offset, offset + 10);
    }
    else if (limit && page) {
        var offset = limit * (page - 1);
        return data.slice(offset, offset + Number(limit));
    }
    else {
        return data;
    }
};
exports.Paginate = Paginate;
var Response = function (_a) {
    var type = _a.type, message = _a.message, data = _a.data;
    return {
        type: type,
        message: message,
        data: data
    };
};
exports.Response = Response;
//# sourceMappingURL=node-hub.js.map