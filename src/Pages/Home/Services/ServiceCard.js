import React from 'react';
import { FaArrowRight } from "react-icons/fa";


const ServiceCard = (props) => {
    const {img, title, price} = props.service;
    return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-2xl">{title}</h2>
            <div className='card-actions justify-between'>
                <span className='text-2xl text-orange-700 font-semibold '>
                    Price: ${price}   
                </span>
                <button  className='text-orange-700 py-4'><FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;