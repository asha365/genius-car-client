import React from 'react';
import calendar from '../../../assets/icons/calender.png';
import call from '../../../assets/icons/call.webp';
import location from '../../../assets/icons/location.png';
import './ServiceInfo.css';


const ServiceInfo = () => {
    return (
       <div className="card lg:card-side bg-gray-800 text-white shadow-xl gap-18 my-20 pb-8">
        <div className='ml-24'>
            <div className='mt-20 card-img'>
                <figure  style={{height:'80px', width:'80px'}}><img className='mr-4'  src={calendar} alt="Album"/></figure>
            </div>
            <div className="card-body card-info ml-8">
                <p>We are open monday-friday</p> 
                <h2 className="card-title">7:00 am - 9:00 pm</h2>
            </div>
        </div>

        <div className='ml-24'>
            <div className='mt-20 '>
                <figure  style={{height:'50', width:'50px'}}><img className='mr-2'  src={call} alt="Album"/></figure>
            </div>
            <div className="card-body card-info ml-8">
                <p>We are open monday-friday</p> 
                <h2 className="card-title">7:00 am - 9:00 pm</h2>
            </div>
        </div>

        <div className='ml-24'>
            <div className='mt-20 '>
                <figure  style={{height:'60px', width:'60px'}}><img className='mr-4'  src={location} alt="Album"/></figure>
            </div>
            <div className="card-body card-info ml-8">
                <p>We are open monday-friday</p> 
                <h2 className="card-title">7:00 am - 9:00 pm</h2>
            </div>
        </div>
        </div>

        
    );
};

export default ServiceInfo;