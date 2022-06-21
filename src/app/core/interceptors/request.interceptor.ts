import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from 'src/app/shared/constants/api-key';
import {
  RequestValues,
  RequestsShortKeys,
} from 'src/app/shared/constants/shared-api-constants';
import { RootObject } from 'src/app/youtube/models/search-response.model';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  private key = API_KEY;

  intercept(
    request: HttpRequest<RootObject>,
    next: HttpHandler
  ): Observable<HttpEvent<RootObject>> {
    return next.handle(
      request.clone({
        url: `${RequestValues.base}${
          RequestValues[request.url as RequestsShortKeys]
        }`,
        setParams: { key: this.key },
      })
    );
  }
}
