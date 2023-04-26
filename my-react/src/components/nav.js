import React from 'react'

const nav = () => {
  return (
    <nav>
      <h1 className='storeName'>The Tech Store</h1>
      <div className='navBox'>
        <p>Login/SignUp</p>
        <div className='cartBox'>
        <i className="large material-icons" >add_shopping_cart</i>
        <p>0</p>
        </div>
      </div>
    </nav>
  )
}

export default nav