import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <Link to={`/product/:${props.item.id}`} className='link'>
        <div className='card c'>
            <div className="c-img">
                {props.item.isNew && <span className='new-sea'>New Season</span>}
                <img src={props.item.img} alt="" className="c-mainImg" />
            </div>
            <div className="c-prices">
                <h2>{props.item.title}</h2>
                <div className='price-tag'>
                <h3 className='cut'>${props.item.oldPrice}</h3>
                <h3>${props.item.price}</h3>
                </div>
            </div>
        </div>
    </Link>
  )
}
