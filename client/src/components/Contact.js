import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>Be in touch with us.</span>
        <div className="email">
            <input type="text" placeholder='Enter your e-mail' />
            <button>JOIN US</button>
        </div>
        <div className="contact-icons">
            <i class="ri-instagram-fill"></i>
            <i class="ri-facebook-fill"></i>
            <i class="ri-mail-fill"></i>
            <i class="ri-twitter-x-fill"></i>
            <i class="ri-pinterest-fill"></i>
        </div>
      </div>
    </div>
  )
}
