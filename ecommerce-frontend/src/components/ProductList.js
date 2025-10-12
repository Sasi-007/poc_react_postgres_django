import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState(null);  // Error state

useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
        .then((response) => {
            console.log('Fetched products:', response.data); // Log the fetched products
            setProducts(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError('Error fetching products');
            setLoading(false);
            console.error('Error fetching products:', error);
        });
}, []);


    return (
        <div>
            <h1>Product List</h1>
            {loading && <p>Loading...</p>}  {/* Show loading message while fetching */}
            {error && <p>{error}</p>}  {/* Show error message if there's an issue */}
            <ul>
                {products.length > 0 ? (
                    products.map((product) => (
                        <li key={product.id}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p>Stock: {product.stock}</p>
                        </li>
                    ))
                ) : (
                    <p>No products available.</p> 
                )}
            </ul>
        </div>
    );
};

export default ProductList;
