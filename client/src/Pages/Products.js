import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import List from '../components/List'
import { useParams } from 'react-router-dom'

export default function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);
  return (
    <div>
      <Navbar/>
      <>
        <div className="products">
          <div className="pro-left">
            <div className="filterItem">
              <h2>Product Categories</h2>
              <div className="inputItem">
                <input type="checkbox" id="1" value={1} />
                <label htmlFor="1">Shoes</label>
              </div>
              <div className="inputItem">
                <input type="checkbox" id="2" value={2} />
                <label htmlFor="2">T-Shirt</label>
              </div>
              <div className="inputItem">
                <input type="checkbox" id="3" value={3} />
                <label htmlFor="3">Skirts</label>
              </div>
              <div className="inputItem">
                <input type="checkbox" id="4" value={4} />
                <label htmlFor="4">Jeans</label>
              </div>
            </div>
            <div className="filterItem">
              <h2>Filter by Price</h2>
              <div className="inputItem">
                <span>0</span>
                <input type="range" min={0} max={10000} onChange={(e)=>setMaxPrice(e.target.value)} />
                <span>{maxPrice}</span>
              </div>
            </div>
            <div className="filterItem">
              <h2>Sort by</h2>
              <div className="inputItem">
                <input type="radio" id='asc' value='asc' name='price' onChange={(e)=>setSort("asc")} />
                <label htmlFor="asc">Price (Lowest  - Highest)</label>
              </div>
              <div className="inputItem">
                <input type="radio" id='desc' value='desc' name='price'  onChange={(e)=>setSort("desc")}/>
                <label htmlFor="desc">Price (Highest  - Lowest)</label>
              </div>
            </div>
          </div>
          <div className="pro-right">
            <img src="/img/model1.jpg" alt="" className="catImg" />
            <List catId={catId} maxPrice={maxPrice} sort={sort} />
          </div>
        </div>
      </>
      <Contact/>
      <Footer/>
    </div>
  )
}
