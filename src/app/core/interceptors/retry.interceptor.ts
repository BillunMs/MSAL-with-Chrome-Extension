import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable ,timer, throwError, of} from 'rxjs';
import { retryWhen,mergeMap} from 'rxjs/operators';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  retryDelay = 1500;
  retryMaxAttempts = 25;
  constructor() {}

  retryAfterDelay(): any {
    return retryWhen(errors => {
      return errors.pipe(
        mergeMap((resp, count) => {
          // throw error when we've retried ${retryMaxAttempts} number of times and still get an error
          if(resp.status!==429){
            return
          }
          if (count === this.retryMaxAttempts) {
            return throwError(resp);
          }
          return of(resp).pipe(
            //tap(error => console.log(`Retrying ${error.url}. Retry count ${count + 1}`)),
            mergeMap(() => timer(this.retryDelay))
          );
        })
      );
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe( this.retryAfterDelay());
  }
}
