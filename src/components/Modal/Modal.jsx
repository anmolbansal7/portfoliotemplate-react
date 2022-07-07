import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1>Some Catchy Phrase!</h1>
                    <p onClick={closeModal} className='close'>
                        &times;
                    </p>
                </div>
                <div className='middle-section'>
                    <h3>Main Headline for Modal</h3>
                    <p>Sub Heading for Modal</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero pariatur minima alias iure deserunt laudantium nam officia eum veniam, neque accusantium sequi voluptatum. Labore natus ex eaque reprehenderit ratione fuga.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur magnam officia veniam facere animi voluptas debitis, quaerat autem modi vel, placeat eligendi architecto esse, reprehenderit voluptatibus! Numquam dolorum ipsa iure.
                    </p>
                </div>
                <div className='lower-section'>
                    <a onClick={closeModal} className='modal-btn btn-red'>
                        Close
                    </a>
                    <a
                        href='http://theleanprogrammer.com/aam/'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-green'
                    >
                        View Portfolio
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;
