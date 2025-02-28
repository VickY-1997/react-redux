import React from 'react'
import KfcBox from './KfcBox'
import PizzaBox from './PizzaBox'
import {Provider} from "react-redux"
import store from './component/redux/store'
import CustomerChoice from '../src/component/CustomerChoice'
// import HooksContainer from './component/redux/hooksContainer'

const App = () => {
  return (
    <Provider store={store}>
      <KfcBox/>
      <PizzaBox/>
      {/* <HooksContainer/> */}
      <CustomerChoice/>
    </Provider>
  )
}

export default App
