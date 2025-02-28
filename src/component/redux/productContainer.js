import React, { useEffect } from 'react'
import { FetchProducts } from './products/productAction'
import { useDispatch, useSelector } from 'react-redux'

const ProductContainer = () => {
    const productsData =useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchProducts())
    }, [])

    return (
    <div>
      {productsData.loading && <p>Loading...</p>}
      {productsData.error && <p>{productsData.error}</p>}
      {productsData.products && <p>{productsData.products}</p>}
    </div>
  )
}

// const mapStateToProps = state => {
//     return{
//         productsData : state.products
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         FetchProducts : () => dispatch(FetchProducts())
//     }
// }

export default ProductContainer
