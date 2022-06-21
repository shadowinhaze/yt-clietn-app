import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { addApiItems } from '../actions/api-item.action';
import { ActionCommands } from '../constants/action-commands';
import { SearchValueAction } from '../models/actions.model';

@Injectable()
export class ApiItemsEffect {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  apiItemsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType<SearchValueAction>(ActionCommands.searchSubmit),
      switchMap(({ searchValue }) =>
        this.apiService.getFullItemsList(searchValue).pipe(
          map((apiItems) => addApiItems({ apiItems })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
