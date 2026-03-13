const initialState = {
    products: [],
}


export const productReducer =(state=initialState, action)=>{
    switch(action.type){
        case "GET_PRODUCTS":
            return {...state, products:  action.payload};
            case "ADD_PRODUCTS":
            return {...state, products: [...state.products, action.payload]};

            case "DELETE_PRODUCTS":
            return {...state, products: state.products.filter(p=> p.id !== action.payload) }


            case "EDIT_PRODUCTS":
            return {...state, products: state.products.filter(p=> p.id === action.payload) }
            default:
            return state;
    }
}