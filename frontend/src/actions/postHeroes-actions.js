export function postHeroes(obj) {
    console.log("post heroes action")
    return {
        type : POST_HEROES_REQUEST,
        payload : obj   
    };
  }
  
  export const POST_HEROES_REQUEST  = 'POST_HEROES_REQUEST';
  export const POST_HEROES_SUCCESS  = 'POST_HEROES_SUCCESS';
  export const POST_HEROES_FAILURE = 'POST_HEROES_FAILURE';
  