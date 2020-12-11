import * as actions from './actions';

const initialState = {
    pizzas: [],
    cartItems: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_PIZZAS : 
                            return {
                                ...state,
                                pizzas: action.payload.pizza
                            }
        case actions.ADD_PIZZA: 
                            return {
                                ...state,
                                cartItems: [...state.cartItems, action.payload]
                            }

        case actions.UPDATE_PIZZA:        
                            const index = state.cartItems.findIndex(item => item.pizza === action.payload.pizza); 
                            const newArray = [...state.cartItems];
                            newArray[index].quantity += action.payload.quantity;
                            return { 
                                ...state,
                                cartItems: newArray
                            }   
                            
        case actions.DELETE_PIZZA:        
                            return { 
                                ...state,
                                cartItems: state.cartItems.filter(item => item.pizza !== action.payload.pizza) 
                            }   
        default: return state;
    }    
}

export default reducer;

