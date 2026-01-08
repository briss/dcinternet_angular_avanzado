import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Angular Logging", req.method, req.url);
  return next(req);
};
