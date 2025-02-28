import axios from "axios"
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./productType"

export const fetchRequest = () => {
    return {
        type : FETCH_REQUEST
    }
}

export const fetchSuccess = (products) => {
    return {
        type : FETCH_SUCCESS,
        payload : products
    }
}

export const fetchError = (error) => {
    return {
        type : FETCH_ERROR,
        payload : error
    }
}

export const  FetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchRequest())
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            const data = await res.data.map((item) => item.title)
            dispatch(fetchSuccess(data))
        } catch (error) {
            console.log(error.message)
            dispatch(fetchError(error.message))
        }
    }
}
