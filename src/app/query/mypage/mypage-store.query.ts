import { Injectable } from '@angular/core';
import { MyPageStore } from '@infrastructure/store/my-page.store';

@Injectable()
export class MyPageStoreQuery {
  readonly task$ = this.myPageStore.task$.asObservable();
  readonly profile$ = this.myPageStore.profile$.asObservable();

  constructor(private myPageStore: MyPageStore) {}
}
