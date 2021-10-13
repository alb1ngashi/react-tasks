import React from 'react'

/**
* @author
* @function TabCarts
**/

export const TabCarts = (props) => {
  return(
    <div className="tab-card">
        <h2 className="name">{props.name}</h2>
        <h3 className="secondPrice">{props.secondPrice}</h3>
        <p className="firstPrice">{props.firstPrice}</p>

        <button type='button'>Buy Now</button>

    </div>
   )

 }

 export default TabCarts;