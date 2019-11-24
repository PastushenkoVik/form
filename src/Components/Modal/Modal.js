import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = props => {
    
    return (
        <div className="overlay">
            <div className="modal">
                <div className="modal__header">
                    <p className="modal__header-title">Внимание!</p>

                </div>
                <p className="modal__body">
                    Каждый неотвеченный ответ считается неправильным
                </p>
                <div className="modal__footer">
                    <button onClick={props.handleSubmitClick}>Продолжить</button>
                    <button onClick={props.handleCancelClick}>Отмена</button>
 
                </div>
            </div>
            
        </div>
    );
};

// Modal.PropTypes = {
//     // title: PropTypes.string,
//     // isOpen: PropTypes.bool,
//     // onCancel: PropTypes.func,
//     // onSubmit: PropTypes.func,
// };

// Modal.defaultProps ={
//     // title: '',
//     // isOpen: false,
//     // onCancel: () => {},
// }

export default Modal;