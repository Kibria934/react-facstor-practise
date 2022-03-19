import React from 'react';
import ReactModal from '../reactModal/ReactModal';
import './SingleProduct.css'
const SingleProduct = (props) => {
     const { title,image } = props.product;
     return (
          <div data-aos="zoom-in-left" className="col-md-6 col-12 col-lg-4 col-sm-6">
               <div className="card p-2 m-4 card-body ">
                    <img src={image} alt="" />
                          <h5 >{title.slice(0,20)}</h5>
                              <div className="button d-flex justify-content-around m-2">
                              <button onClick={props.addToCard} className='btn btn-primary'>Add to card</button>     
                              <button className='btn btn-danger'>Delete</button>     
                              {/* <button className='btn btn-success'>Details</button> */}
                              <ReactModal product={props.product}></ReactModal>
                    </div>   
               </div>
          </div>
     );
};

export default SingleProduct;