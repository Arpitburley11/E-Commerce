import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "/img/sp/sp3.jpg",
    "/img/sp/sp4.jpg",
    "/img/fp/fp3.jpg"
  ]
  return (
    <div>
      <Navbar />
      <>
        <div className="product">
          <div className="p-left">
            <div className="p-images">
              <img src={images[0]} alt='' onClick={e=>setSelectedImg(0)}/>
              <img src={images[1]} alt='' onClick={e=>setSelectedImg(1)}/>
              <img src={images[2]} alt='' onClick={e=>setSelectedImg(2)}/>
            </div>
            <div className="mainImage">
              <img src={images[selectedImg]} alt='' />
            </div>
          </div>
          <div className="p-right">
            <h1>Title</h1>
            <span className='p-price' >$199</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur alias laudantium voluptatem suscipit neque, sed aspernatur nihil at dolor quia architecto corrupti? Dolores voluptatum, cumque itaque soluta numquam perferendis.</p>
            <div className="quantity">
              <button  onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev-1)} >-</button>
              {quantity}
              <button onClick={()=>setQuantity(prev=>prev+1)} >+</button>
            </div>
            <button className="add">
              <i class="ri-shopping-cart-2-fill"></i>
              ADD TO CART
            </button>
            <div className="p-link">
              <div className="item">
                <i class="ri-heart-3-line"></i>
                ADD TO WISHLIST
              </div>
              <div className="item">
                <i class="ri-record-mail-line"></i>
                ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Arpit</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            {/* <hr/>
            <div className="info">
              <span>DESCRIPTION</span>
              <hr/>
              <span>ADITIONAL INFOMATION</span>
              <hr/>
              <span>FAQs</span>
            </div> */}
          </div>
        </div>
      </>
      <Contact />
      <Footer />
    </div>
  )
}
