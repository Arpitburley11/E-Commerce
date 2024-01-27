import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src='/img/model5.jpg' alt=''/>
          <button><Link to={'/products/1'} className='link'>Sale</Link></button>
        </div>
        <div className="row">
          <img src='/img/model4.jpg' alt=''/>
          <button><Link to={'/products/1'} className='link'>Women</Link></button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src='/img/fp/fp5.jpg' alt=''/>
          <button><Link to={'/products/1'} className='link'>New Season</Link></button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src='/img/model1.jpg' alt=''/>
              <button><Link to={'/products/1'} className='link'>Men</Link></button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src='/img/model6.jpg' alt=''/>
              <button><Link to={'/products/1'} className='link'>Accessories</Link></button>
            </div>
          </div>
        </div>
        <div className="row row-l">
          <img src='/img/model4.jpg' alt=''/>
          <button><Link to={'/products/1'} className='link'>Children</Link></button>
        </div>
      </div>
    </div>  
  )
}
