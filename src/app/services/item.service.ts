import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { Item } from '../models/item';
import { LoadingItems } from '../store/actions/item.actions';
import { ItemState } from '../store/reducers/item.reducer';

import { storageService } from './async-storage.service'

const ENTITY = 'item'
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private store: Store<ItemState>) {
    // If empty - load test data to storage
    const items = JSON.parse(localStorage.getItem(ENTITY) || 'null');
    if (!items || items.length === 0) {
      localStorage.setItem(ENTITY, JSON.stringify(this.createItems()))
    }
  }
  query(filterBy = ''): Observable<Item[]> {
    this.store.dispatch(new LoadingItems());
    return from(storageService.query(ENTITY) as Promise<Item[]>)
    // return new Observable((observer) => observer.next(items));
  }
  getById(itemId: string): Observable<Item> {
    return from(storageService.get(ENTITY, itemId) as Promise<Item>)
  }
  remove(itemId: string): Observable<boolean> {
    return from(storageService.remove(ENTITY, itemId))
  }

  save(item: Item): Observable<Item> {
    const method = (item.id) ? 'put' : 'post'
    const prmSavedItem = storageService[method](ENTITY, item)
    return from(prmSavedItem) as Observable<Item>
  }

  private createItems(): Item[] {
    return ['Vue', 'Angular', 'React', 'Redux', 'NGRX', 'Vuex']
      .map(txt => ({id: storageService.makeId(), txt}))
  }
  get emptyItem(): Item {
    return {
      id: '',
      txt: ''
    }
  }
}
