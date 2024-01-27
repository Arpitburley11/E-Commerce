import React from 'react'
import Card from './Card'

export default function FeaturedProducts(props) {
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
            img:'/img/fp/fp4.jpg',
            title: "T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        }
    ]
  return (
    <div className='featuredProducts'> 
        <div className="fp-top">
            <h1>{props.title} Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis rerum veniamasdas  porro commodi dolore debitis dicta velit dolor, dignissimos esse. Voluptates sdas dolorem dolores quibusdam inventore non in a? Fugit quod culpa quo consectetur! Laudantium beatae fugit temporibus iure necessitatibus, amet dd distinctio sint nihil, ullam ut neque sapiente ratione assumenda? </p>
        </div>
        <div className="fp-bottom">
            {data.map(item=>(
                <Card item={item} key={item.id} />
            ))}
        </div>
    </div>
  )
}
