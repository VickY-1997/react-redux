import { ORDER_KFC } from "./KfcTYpe.js"

export const orderKfc = (number=0) => {
    return{
       type : ORDER_KFC,
       payload : number
    }
}