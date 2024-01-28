import React from 'react'

export default function Cart() {
    const data = [
        {
            id:1,
            img:'/img/fp/fp3.jpg',
            title: "Long Sleeve Graphic T-Shirt",
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:2,
            img:'/img/fp/fp3.jpg',
            title: "Turtule Neck",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing eli",
            isNew: true,
            oldPrice: 19,
            price: 12,
        }
    ]
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data.map((item)=>(
        <div className="cart-item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="cart-price">1 x ${item.price}</div>
            </div>
            <i className="ri-close-circle-fill delete"></i>
        </div>
      ))}
      <div className="total">
        <span>SubTotal</span>
        <span>$154</span>
      </div>
      <button className='check'>Procced to Checkout</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

//substring(start,end) javaScript string method
//? not gonna work