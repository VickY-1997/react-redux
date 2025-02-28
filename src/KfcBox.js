import React from "react";
import {orderKfc} from './component/redux/kfc/KfcAction'
import { connect } from "react-redux";

const KfcBox = (props) => {
  return (
    <div>
      <center>
        <h1>KFC_BURGER : {props.KFC_BURGER}</h1>
        <button onClick={props.orderKfc}>Remove</button>
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
        orderKfc : () => dispatch(orderKfc())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KfcBox)