import React from 'react'
import {orderPizza} from './component/redux/pizza/PizzaAction'
import { connect } from 'react-redux'

const PizzaBox = (props) => {
  return (
    <div>
      <center>
      <h1>Pizza : {props.PIZZA}</h1>
      <button onClick={props.orderPizza}>remove</button>
      </center>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    PIZZA : state.pizza.PIZZA
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orderPizza :() => dispatch(orderPizza())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox)
