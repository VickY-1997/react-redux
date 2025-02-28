import { useDispatch, useSelector } from "react-redux"
import {orderKfc} from './kfc/KfcAction'

const HooksContainer = () => {
    const KFC_BURGER = useSelector(state => state.KFC_BURGER)
    const dispatch = useDispatch()
  return (
    <div>
      <center>
        <h1>KFC_BURGER : {KFC_BURGER}</h1>
        <button onClick={() => dispatch(orderKfc())}>Remove</button>
      </center>
    </div>
  )
}

export default HooksContainer

