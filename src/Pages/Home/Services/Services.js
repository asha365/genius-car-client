import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceInfo from './ServiceInfo';

const Services = () => {
    const [services, setServices] = useState([]);
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
    return (
        <div>
        <div className="hero-content text-center mb-4">
            <div>
            <p className='text-2xl text-orange-700 font-bold'>Service</p>
            <h1 className=" text-5xl font-bold">Our Service Area</h1>
            <p className="py-6">The majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
            </div>
        </div>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
        </div>

        <div className='my-20 text-center'>
        <button  className="btn btn-outline btn-primary ">More Services</button>
        </div>

        <div>
            <ServiceInfo></ServiceInfo>
        </div>
        
        </div>
        
        
    );
};

export default Services;