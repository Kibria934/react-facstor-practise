import React, { useEffect, useState } from 'react';
import SingleProduct from '../singleProduct/SingleProduct';

const AllProducts = (props) => {
     const [products, setProduct] = useState([]);
     useEffect(() =>{
          fetch('https://fakestoreapi.com/products')
               .then(res => res.json())
               .then(data => setProduct(data))
     }, [])
     console.log(products);
     return (
          <div>
               <div className="row container mx-auto mt-4">
                      {
                    products.map(product =><SingleProduct addToCard={props.addToCard} product={product}  key={product.id}></SingleProduct>)
               }
             </div>
          
          </div>
     );
};

export default AllProducts;