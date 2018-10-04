import { combineReducers } from 'redux';
import heroesReducer from './createHeroes-reducers';
import newHeroesReducer from './postHeroes-reducers'

const reducers = {
  heroesStore: heroesReducer,
  newHeroesStore: newHeroesReducer
}
console.log("index reducer")
const rootReducer = combineReducers(reducers);

export default rootReducer;