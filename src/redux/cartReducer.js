import { ADD_ITEM } from "./actionTypes";

const initialState = {
    data: [localStorage.getItem('selectedState')],
};
export const cartReducer = (state = initialState, action) => {

    
    switch (action.type) {
        case ADD_ITEM:
            // console.log(action.payload)
            localStorage.setItem('selectedState',[...state.data, action.payload])
            return {
                ...state,
                data: [...state.data, action.payload],
            };

        // case DELETE_ITEM:
        //   return {
        //     ...state,
        //     numOfItems: state.numOfItems - 1,
        //   };
        default:
            return state;
    }
};


// export default cartReducer;