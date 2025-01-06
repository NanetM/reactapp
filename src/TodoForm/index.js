import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [ newTodoValue, setNewTodoValue ] = React.useState('');
    

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea placeholder="Terminar curso react"
            value={newTodoValue}
            onChange={onChange} />
            <div className = 'TodoForm-buttonContainer'>
            <button
            Type="button"
            className='TodoForm-button--cancel'
            onClick={onCancel}
            >Cancelar</button>
            <button className='TodoForm-button--add'>Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };