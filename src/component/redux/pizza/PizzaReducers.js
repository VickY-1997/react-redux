import { ORDER_PIZZA } from "./PizzaType"

const initialState = {
    PIZZA : 100
}

const PizzaReducers = (state=initialState, action) => {
    switch(action.type){
        case ORDER_PIZZA :
            return{
                ...state,
                PIZZA : state.PIZZA -1
            }
            default :
            return state
    }
}

export default PizzaReducers