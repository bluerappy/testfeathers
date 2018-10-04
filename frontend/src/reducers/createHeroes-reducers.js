const defaultState = {
    heroes: []
  }
  
  export default (state=defaultState, action={}) => {
    // console.log("heroes reducer")
    // console.log("get", action.payload)
    switch (action.type) {
      case 'FETCH_HEROES_SUCCESS': {
        return {
          ...state,
          heroes: action.payload
        }
      }
      default:
        return state;
    }
  }
  