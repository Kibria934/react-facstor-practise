import React from 'react';
import './Menubar.css'
const Menubar = (props) => {
     const { count } = props;
     return (
          <div>
               <div className="menubar container">
                    <div className="row">
                         <div className="col-md-2 p-2 text-warning fs-1 fw-bold logo">Logo</div>
                         <div className="col-md-10 menu-container d-flex justify-content-end">
                              <li className='ms-4 p-3 '><a className='text-success fs-3 fw-bold' href="">Home</a></li>
                              <li className='ms-4 p-3 '><a className='text-success fs-3 fw-bold' href="">Contact</a></li>
                              <li className='ms-4 p-3 '><a className='text-success fs-3 fw-bold' href="">Card<sup className='text-primary'>{count}</sup></a></li>
                              <li className='ms-4 p-3 '><a className='text-success fs-3 fw-bold' href="">Login</a></li>
                         </div>
                    </div>
         </div>
          </div>
     );
};

export default Menubar;