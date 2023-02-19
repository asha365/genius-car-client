import React from 'react';
import './ProductCard.css'

const ProductCard = ({product}) => {
    const {image, title, rating, price } = product;
    return (
        <div className="card product w-96 bg-base-100 text-center shadow-xl">
        <figure><img  src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <p>{rating}</p>
            <h2 className=" text-2xl font-semibold text-gray-700">{title}</h2>
            <p className='text-orange-700 font-semibold'>${price}</p>
        </div>
        </div>
    );
};

export default ProductCard;