interface PaginateParam {
    data?: [];
    limit?: number;
    page?: number;
}
export declare const paginate: ({ data, limit, page }: PaginateParam) => {
    data: any;
    total: 0;
};
interface ResponseParam {
    type?: string;
    message?: string;
    data?: any;
}
export declare const Response: ({ type, message, data }: ResponseParam) => {
    type: string;
    message: string;
    data: any;
};
export {};
