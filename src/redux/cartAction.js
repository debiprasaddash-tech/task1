import { ADD_ITEM } from "./actionTypes";

const addItem = (payload) => {
    console.log(payload)
  return {
    type: ADD_ITEM,
    payload:payload
  };
};

// const deleteItem = () => {
//   return {
//     type: DELETE_ITEM,
//   };
// };

export { addItem}