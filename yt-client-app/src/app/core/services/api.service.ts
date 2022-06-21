import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs';
import {
  RequestsShortKeys,
  RESULTS_LIST_SIZE,
  YouTubeHttpParams,
} from 'src/app/shared/constants/shared-api-constants';
import { SearchItemShort } from 'src/app/youtube/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getFullItemsList(searchValue: string) {
    const params = new HttpParams()
      .set(YouTubeHttpParams.part, YouTubeHttpParams.partSnip)
      .set(YouTubeHttpParams.type, YouTubeHttpParams.typeVid)
      .set(YouTubeHttpParams.maxResults, RESULTS_LIST_SIZE)
      .set(YouTubeHttpParams.search, encodeURI(searchValue));

    return this.http
      .get<string>(RequestsShortKeys.search, {
        params,
      })
      .pipe(
        switchMap((ids) => {
          const innerParams = new HttpParams()
            .set(
              YouTubeHttpParams.part,
              `${YouTubeHttpParams.partSnip},${YouTubeHttpParams.partStats}`
            )
            .set(YouTubeHttpParams.id, ids);

          return this.http.get<SearchItemShort[]>(RequestsShortKeys.video, {
            params: innerParams,
          });
        })
      );
  }

  getItemById(id: string) {
    const params = new HttpParams()
      .set(
        YouTubeHttpParams.part,
        `${YouTubeHttpParams.partSnip},${YouTubeHttpParams.partStats}`
      )
      .set(YouTubeHttpParams.id, id);

    return this.http
      .get<SearchItemShort[]>(RequestsShortKeys.video, {
        params,
      })
      .pipe(map((data) => data[0]));
  }
}
