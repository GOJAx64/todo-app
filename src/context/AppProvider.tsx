import { createContext, useState } from 'react';
import { ContextProps, defaultTodos, propsAppProvider, Todo } from '../types';
import { useLocalStorage } from '../hooks';

const AppContext = createContext<ContextProps>(); //! Resolve this

export const AppProvider = ({ children }:propsAppProvider) => {
    
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', defaultTodos);
    const [searchValue, setSearchValue] = useState('');
    const [showModal, setShowModal] = useState(false);

    const totalTodos = todos.length;
    const completedTodos = todos.filter( (todo:Todo) => !!todo.completed ).length;

    let searchedTodos = [];
    
    if(searchValue.length < 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter( (todo:Todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        });
    }
    
    const completeTodo = ( text:string ) => {
        const todoIndex = todos.findIndex( (todo:propsTodo) => todo.text === text);
        const newTodos = [...todos];
        if(!newTodos[todoIndex].completed) {
          newTodos[todoIndex].completed = true;
        } else {
          newTodos[todoIndex].completed = false;
        }
        saveTodos(newTodos);
    };
    
    const deleteTodo = ( text:string ) => {
        const todoIndex = todos.findIndex( (todo:propsTodo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    
    return (
        <AppContext.Provider
            value={{
                todos,
                searchValue,
                setSearchValue,
                totalTodos,
                completedTodos,
                searchedTodos,
                completeTodo,
                deleteTodo,
                showModal,
                setShowModal,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppContext;