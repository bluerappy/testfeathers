import { all, fork , spawn } from 'redux-saga/effects';
import {postWatcherSaga} from './postHeroes-saga';
import {watcherSaga} from './saga'

export function* rootSaga() {
    yield fork(root);
  }

function* root() {
    console.log("ROOTSTART")
  try {
   yield all([
        spawn (postWatcherSaga),
        spawn (watcherSaga)
   ]);
  }
  catch(error) {

  }
}