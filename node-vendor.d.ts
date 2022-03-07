interface PaginateParam {
    data?: [];
    limit?: number;
    page?: number;
    offset?: number;
}
export declare const paginate: (data?: any[], { limit, page, offset }?: PaginateParam) => {
    data: any[];
    total: number;
};
export {};
