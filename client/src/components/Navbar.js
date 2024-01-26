import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="nav-wrapper">
                <div className="nav-left">
                    <div className="nav-item">
                        <img className='nav-img' src='/img/img.png' alt='' />
                        <i class="ri-arrow-down-s-line"></i>
                    </div>
                    <div className="nav-item">
                        <span>USD</span>
                        <i class="ri-arrow-down-s-line"></i>
                    </div>
                    <div className="nav-item">
                        <Link className='link' to={'/products/1'}>Women</Link>
                    </div>
                    <div className="nav-item">
                        <Link className='link' to={'/products/1'}>Men</Link>
                    </div>
                    <div className="nav-item">
                        <Link className='link' to={'/products/1'}>Childrens</Link>
                    </div>
                </div>
                <div className="nav-center">
                    <Link className='link' to={'/'}>LAMASTORE</Link>
                </div>
                <div className="nav-right">
                    <div className="nav-item">
                        <Link className='link'>Home</Link>
                    </div>
                    <div className="nav-item">
                        <Link className='link'>About</Link>
                    </div>
                    <div className="nav-item">
                        <Link className='link'>Contact</Link>
                    </div>
                    <div className="nav-item">
                        <Link className='link'>Stores</Link>
                    </div>
                    <div className="nav-icons">
                        <i class="ri-search-line"></i>
                        <i class="ri-user-line"></i>
                        <i class="ri-heart-3-line"></i>
                        <div className="nav-cart">
                            <i class="ri-shopping-cart-2-line"></i>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
