const {pizzaActions}  = require('../pizza/pizzaSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    KFC_BURGER : 100
}

const KfcSlice = createSlice({
    name : "KFC",
    initialState,
    reducers : {
        kfcOrder : (state) => {
            state.KFC_BURGER--
        }
    },
    extraReducers : (builder) => {
        builder.addCase(pizzaActions.pizzaOrder, (state) => {
            state.KFC_BURGER--
        })
    }
})

module.exports = KfcSlice.reducer
module.exports.kfcActions = KfcSlice.actions