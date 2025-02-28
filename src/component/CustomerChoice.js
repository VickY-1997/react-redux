import React, { useState } from "react";
import {orderKfc} from './redux/kfc/KfcAction'
import { connect } from "react-redux";

const CustomerChoice = (props) => {
    const [number, setNumber] = useState(0)
  return (
    <div>
      <center>
        <h1>KFC_BURGER : {props.KFC_BURGER}</h1>
        <input type="number" name="kfc" id="kfc" placeholder="Enter your number" value={number} onChange={(e) => setNumber(e.target.value)}/>
        <button onClick={() => props.orderKfc(number)}>Remove</button>
      </center>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        KFC_BURGER : state.kfc.KFC_BURGER
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        orderKfc : (number) => dispatch(orderKfc(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerChoice)