export interface HttpResponse {
    message: string;
    status: number;
}

export interface ErrorResponse extends HttpResponse {
    status: 400 | 401 | 403 | 404 | 500;
}

export const unauthorized: ErrorResponse = {
  message: 'Unauthorized',
  status: 401,
};

export function isErrorResponse(arg: any): arg is ErrorResponse {
  return arg.status >= 400 && arg.status < 600;
}
