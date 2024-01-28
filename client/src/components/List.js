import React from 'react'
import Card from '../components/Card.js'
export default function List() {
    const data = [
        {
            id:1,
            img:'/img/fp/fp1.jpg',
            title: "Long Sleeve Graphic T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:2,
            img:'/img/fp/fp2.jpg',
            title: "Turtule Neck",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:3,
            img:'/img/fp/fp3.jpg',
            title: "T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,  
        },
        {
            id:4,
            img:'/img/fp/fp5.jpg',
            title: "T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:5,
            img:'/img/fp/fp4.jpg',
            title: "T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:6,
            img:'/img/fp/fp2.jpg',
            title: "T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        }
    ]
  return (
    <div className='list'>
      {data.map(item=>(
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}
