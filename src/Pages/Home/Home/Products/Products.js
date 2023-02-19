import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
        <div className="hero mb-4 bg-base-200 text-center">
        <div className="hero-content">
            <div >
            <p className='text-2xl text-orange-700 font-bold'>Popular Products</p>
            <h1 className="text-5xl font-bold">Browse Our Products</h1>
            <p className="py-6">The majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable.</p>
            </div>
        </div>
        </div>

        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map(product => <ProductCard
                    key={product.id}
                    product={product}
                ></ProductCard>)
            }
        </div>

        <div className=" my-20 m-auto text-center">
            <button className="btn btn-outline btn-primary">More Products</button>
        </div>

        </div>
    );
};

export default Products;