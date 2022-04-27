import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { ActionCommands } from '../constants/action-commands';

@Injectable()
export class ApiItemsEffect {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  apiItemsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType<SearchValueAction>(ActionCommands.searchSubmit),
      switchMap(({ searchValue }) =>
        this.apiService.getFullItemsList(searchValue).pipe(
          map((items) => ({
            type: ActionCommands.apiFetch,
            apiItems: items,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
