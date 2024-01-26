import React from 'react'

export default function Footer() {
  return (
    <div className='footer'> 
      <div className="foot-top">
        <div className="foot-item">
            <h1>Categories</h1>
            <span>Men</span>
            <span>Women</span>
            <span>Childrens`</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
        </div>
        <div className="foot-item">
            <h1>Links</h1>
            <span>FAQs</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
        </div>
        <div className="foot-item">
            <h1>About</h1>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam vel doloremque, molestiae repudiandae praesentium possimus esse quo ad, quidem, enim laudantium odit libero necessitatibus culpa error quis dolor minima non.</span>
        </div>
        <div className="foot-item">
            <h1>Contacts</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perferendis error nulla accusamus ex ipsa commodi odit quod maiores. Ipsum hic est nihil illo earum facere mollitia ducimus nisi molestiae!</span>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="foot-left">
            <span className="foot-logo">Lamastore</span>
            <span className="copyright">@ Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="foot-right">
            <img className='foot-img' src='/img/payment.png' alt=''/>
        </div>
      </div>
    </div>
  )
}
