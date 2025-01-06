import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoImagen } from '../TodoImagen';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import React from 'react';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';


function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo, 
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <div className="App">
        <div className="App__block App__block--left">
          <TodoImagen />
        </div>
        <div className="App__block App__block--right">
          <TodoList>
            {loading &&
            <>
             <TodosLoading />
             <TodosLoading />
             <TodosLoading />
             <TodosLoading />
            </>
            }
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <CreateTodoButton
            setOpenModal={setOpenModal} />
          { openModal && (
            <Modal>
            <TodoForm />
          </Modal>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export { AppUI };
