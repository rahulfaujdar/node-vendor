import http from "http";

export const createServer = (port: number) => {
    http.createServer().listen(port);
}

interface PaginateParam {
    data?: [],
    limit?: number,
    page?: number,
}

export const Paginate = ({data = [], limit, page}: PaginateParam) => {
    if (limit && !page) {
        return data.slice(0, limit);
    } else if (!limit && page) {
        const offset = 10 * (page - 1);
        return data.slice(offset, offset + 10);
    } else if (limit && page) {
        const offset = limit * (page - 1);
        return data.slice(offset, offset + Number(limit));
    } else {
        return data;
    }
}

interface ResponseParam {
    type?: string,
    message?: string,
    data?: any
}

export const Response = ({type, message, data}: ResponseParam) => {
    return {
        type,
        message,
        data
    }
}