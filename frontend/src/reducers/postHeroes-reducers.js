const defaultState = {
    heroes: []
  }
  
  export default (state=defaultState, action={}) => {
    console.log("post heroes reducer")
    switch (action.type) {
      case 'POST_HEROES_SUCCESS': {
        return {
          ...state,
          heroes: action.payload
        }
      }
      default:
        return state;
    }
  }
  