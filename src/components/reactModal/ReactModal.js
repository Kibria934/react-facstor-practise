import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


// This is react modal from bootstrap====
const ReactModal = (props) => {
     console.log(props.product);
     const { title, price, image, description, category } = props.product;
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     return (
          <div>
                  <>
                    <Button variant="primary" onClick={handleShow}>
                         Details
                    </Button>
                    {/* Moddal start from here */}
                    
                    <Modal data-aos="zoom-in-left" show={show} onHide={handleClose}>
                         <Modal.Header closeButton>
                              <Modal.Title>{title}</Modal.Title>
                              </Modal.Header>
                         <Modal.Body>
                              <img className='w-100' src={image} alt="" />
                         </Modal.Body>
                         <div className='w-100 p-3  mx-auto d-flex  flex-column'>
                              <h4>Price: <span className='fw-bold' style={{ color: 'green',fontSize:'30px'}}>{ price}</span></h4>
                              <h5>Category: {category}</h5>
                              <p className='w-100 text-justify'>{description}</p>
                         </div>
                              <Modal.Footer>
                                   <Button variant="secondary" onClick={handleClose}>
                                        Close
                              </Button>
                                   <Button variant="primary" onClick={handleClose}>
                                   Save Changes
                              </Button>
                         </Modal.Footer>
                    </Modal>
               </>
          </div>
     );
};

export default ReactModal;