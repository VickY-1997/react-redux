import { ORDER_KFC } from "./KfcTYpe.js"

const initialState = {
    KFC_BURGER : 100
}

const Reducers = (state = initialState, action) => {
    switch(action.type){
        case ORDER_KFC :
            return {
                ...state,
                KFC_BURGER : state.KFC_BURGER - action.payload
            }
            default :
            return state
    }
}

export default Reducers