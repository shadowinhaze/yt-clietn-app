import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { RootObject } from 'src/app/youtube/models/search-response.model';
import { RequestsShortKeys } from 'src/app/shared/constants/shared-api-constants';
import { ItemId } from 'src/app/youtube/models/search-item.model';

@Injectable()
export class ResponseShortIdInterceptor implements HttpInterceptor {
  private shortUrl = RequestsShortKeys.search;

  intercept(
    request: HttpRequest<RootObject>,
    next: HttpHandler
  ): Observable<HttpEvent<string>> {
    return next.handle(request).pipe(
      map((event) => {
        if (
          event instanceof HttpResponse &&
          request.url.includes(this.shortUrl)
        ) {
          const itemIds = event.body.items.reduce(
            (acc: any, item: { id: ItemId }, idx: number) =>
              `${acc}${idx > 0 ? ',' : ''}${(item.id as ItemId).videoId}`,
            ''
          );
          return event.clone({ body: itemIds });
        }
        return event;
      })
    );
  }
}
