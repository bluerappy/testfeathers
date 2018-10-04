import { takeLatest, call, put } from 'redux-saga/effects';
import io from 'socket.io-client';
import feathers from '@feathersjs/client';
import {POST_HEROES_REQUEST} from "../actions/postHeroes-actions"

const socket = io('http://127.0.0.1:3030');

export const app = feathers();
  app.configure(feathers.socketio(socket));
  app.configure(feathers.authentication({
  storage: localStorage,
}));

export function* postWatcherSaga() {
    console.log(" POST watcherSaga")
    yield takeLatest(POST_HEROES_REQUEST , postWorkerSaga);
  }

function* postWorkerSaga(obj) {
    console.log(" POST startWorker")
  try {
    const response = yield call(postHeroes, obj.payload);
    console.log(" POST workerSaga",response)
    const data = response;
    console.log("data", data)
    yield put({ type: "POST_HEROES_SUCCESS", payload: data });
  } catch (error) { console.log("ERROR",error)
    yield put({ type: "POST_HEROES_FAILURE", payload: error });
  }
}
function postHeroes(obj) {
    return app.service('create-heroes').create({
      name : obj.name,
      race : obj.race
    })
}