import { takeLatest, call, put } from 'redux-saga/effects';
import io from 'socket.io-client';
import feathers from '@feathersjs/client';
import {FETCH_HEROES_REQUEST} from "../actions/createHeroes-actions"

const socket = io('http://127.0.0.1:3030');

export const app = feathers();
  app.configure(feathers.socketio(socket));
  app.configure(feathers.authentication({
  storage: localStorage,
}));

export function* watcherSaga() {
    // console.log("watcherSaga")
    yield takeLatest(FETCH_HEROES_REQUEST , workerSaga);
  }

function* workerSaga() {
    // console.log("startWorker")
  try {
    const response = yield call(getAllHeroes);
    // console.log("workerSaga",response)
    const data = response.data;
    yield put({ type: "FETCH_HEROES_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_HEROES_FAILURE", payload: error });
  }
}
function getAllHeroes() {
    return app.service('create-heroes').find()
}