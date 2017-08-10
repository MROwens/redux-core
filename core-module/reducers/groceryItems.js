
const groceryItems = (state = [], action) => {
  switch(action.type){
    case 'GET_ITEMS':
    return Object.assign({}, state, {
      
    })

    case 'ADD_ITEM':
    return Object.assign({}, state, {

    })
    default:
      return state
  }
}

export default groceryItems;
