export declare const createServer: (port: number) => void;
interface PaginateParam {
    data?: [];
    limit?: number;
    page?: number;
}
export declare const Paginate: ({ data, limit, page }: PaginateParam) => never[];
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
