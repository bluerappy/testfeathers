export function fetchHeroes() {
  // console.log("heroes action")
  return {
      type : FETCH_HEROES_REQUEST   
  };
}

export const FETCH_HEROES_REQUEST  = 'FETCH_HEROES_REQUEST';
export const FETCH_HEROES_SUCCESS  = 'FETCH_HEROES_SUCCESS';
export const FETCH_HEROES_FAILURE = 'FETCH_HEROES_FAILURE';
