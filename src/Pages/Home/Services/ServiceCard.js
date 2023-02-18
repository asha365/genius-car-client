import React from 'react';

const ServiceCard = (props) => {
    const {img, title, price} = props.service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-2xl">{title}</h2>
            <p className='text-2xl text-orange-700 font-semibold'>Price: ${price}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;