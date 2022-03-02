interface PaginateParam {
    data?: [],
    limit?: number,
    page?: number,
}

export const paginate = ({data = [], limit, page}: PaginateParam) => {
    const total = data.length;
    let _data;
    if (limit && !page) {
        _data = data.slice(0, limit);
    } else if (!limit && page) {
        const offset = 10 * (page - 1);
        _data = data.slice(offset, offset + 10);
    } else if (limit && page) {
        const offset = limit * (page - 1);
        _data = data.slice(offset, offset + Number(limit));
    } else {
        _data = data;
    }
    return {
        data: _data,
        total
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