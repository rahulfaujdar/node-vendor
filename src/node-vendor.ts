interface PaginateParam {
    data?: [],
    limit?: number,
    page?: number,
    offset?: number,
}

export const paginate = (data = [], {limit, page = 0, offset = 0}: PaginateParam = {}) => {
    const _total = data.length;
    const _offset = page ? limit * (page - 1) : Number(offset);
    const _limit = limit ? _offset + Number(limit) : _total;
    const _data = data.slice(_offset, _limit);
    return {
        data: _data,
        total: _total
    };
};