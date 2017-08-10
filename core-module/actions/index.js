export const getItems = () => {
  return {
    type: 'GET_ITEMS'
  }
}

export const addItem= (item) => {
  return {
    type: 'ADD_ITEM',
    item
  }
}

export const deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    id
  }
}

export const updateItem = (item) => {
  return{
    type: 'UPDATE_ITEM',
    item
  }
}
