import React from 'react'

function ProductInfo() {
  
  
const product = {
    name:"laptop",
    price:"$34",
    availbility:"in stock"
}
  
    return (
    <div>
        <h1>name:{product.name}</h1>
        <h1>price:{product.price}</h1>
        <h1>availbility{product.availbility }</h1>



    </div>
  )
}

export default ProductInfo