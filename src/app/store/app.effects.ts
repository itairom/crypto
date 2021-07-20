import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { ItemService } from '../services/item.service';
import { ItemAction, SAVE_ITEM, ADDED_ITEM, UPDATED_ITEM, LOAD_ITEMS, LOADED_ITEMS, REMOVE_ITEM, REMOVED_ITEM, LOAD_ITEM, LOADED_ITEM, SET_ERROR } from './actions/item.actions';

// Nice way to test error handling? localStorage.clear() after items are presented 
@Injectable()
export class AppEffects {

  loadItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_ITEMS),
      switchMap((action) =>
        this.itemService.query(action.filterBy).pipe(
          map((items) => ({
            type: LOADED_ITEMS,
            items,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error)
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })
        )
      )
    );
  });
  loadItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_ITEM),
      switchMap((action) =>
        this.itemService.getById(action.itemId).pipe(
          map((item) => ({
            type: LOADED_ITEM,
            item,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error)
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })
        )
      ),
    );
  });
  removeItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(REMOVE_ITEM),
      switchMap((action) =>
        this.itemService.remove(action.itemId).pipe(
          map(() => ({
            type: REMOVED_ITEM,
            itemId: action.itemId,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error)
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })
        )
      ),
    );
  })
  saveItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SAVE_ITEM),
      switchMap((action) =>
        this.itemService.save(action.item).pipe(
          map((savedItem) => ({
            type: (action.item.id) ? UPDATED_ITEM : ADDED_ITEM,
            item: savedItem,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error)
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })

        )
      )
    );
  })
  constructor(
    private actions$: Actions<ItemAction>,
    private itemService: ItemService
  ) { }
}
