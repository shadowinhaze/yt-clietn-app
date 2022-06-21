import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { RequestsShortKeys } from 'src/app/shared/constants/shared-api-constants';
import { RootObject } from 'src/app/youtube/models/search-response.model';
import {
  SearchItem,
  SearchItemShort,
} from 'src/app/youtube/models/search-item.model';

@Injectable()
export class ResponseShortCardInterceptor implements HttpInterceptor {
  private shortUrl = RequestsShortKeys.video;

  intercept(
    request: HttpRequest<RootObject>,
    next: HttpHandler
  ): Observable<HttpEvent<SearchItemShort[]>> {
    return next.handle(request).pipe(
      map((event) => {
        if (
          event instanceof HttpResponse &&
          request.url.includes(this.shortUrl)
        ) {
          const newItems = event.body.items.map((item: SearchItem) => ({
            id: item.id,
            title: item.snippet.title,
            publishedAt: item.snippet.publishedAt,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            tags: item.snippet.tags,
            statistics: item.statistics,
            thumbnails: item.snippet.thumbnails,
          }));

          return event.clone({
            body: newItems,
          });
        }
        return event;
      })
    );
  }
}
