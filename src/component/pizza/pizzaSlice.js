
const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    PIZZA : 100
}

const PizzaSlice = createSlice({
    name : "pizza",
    initialState,
    reducers : {
        pizzaOrder : (state) => {
            state.PIZZA--
        }
    }
})


module.exports = PizzaSlice.reducer
module.exports.pizzaActions = PizzaSlice.actions