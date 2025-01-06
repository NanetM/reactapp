import './CreateTodoButton.css';
import React from'react';

function CreateTodoButton({ setOpenModal, setFormData }) {
    return (
        <div className='CreateTodoButton'>
            <button
                className="CreateTodoButton-button"
                onClick={
                    () => {
                       // console.log('setFormData', setFormData);
                        setOpenModal(state => !state);
                        //setFormData(null);
                    }
                }
            >+</button>
        </div>
    );
}

export { CreateTodoButton };