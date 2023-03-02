import { useState } from 'react';
import { CreateTodoButton, TodoCounter, TodoItem, TodoList, TodoSearch } from './components'
import { useLocalStorage } from './hooks/useLocalStorage';

const defaultTodos = [
  { text: 'Tarea 1', completed: true },
  { text: 'Tarea 2', completed: true },
  { text: 'Tarea 3', completed: false },
  { text: 'Tarea 4', completed: false },
  { text: 'Compiladores', completed: true },
  { text: 'Perceptron', completed: false },
]

interface propsTodo {
  text: string
  completed: boolean
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', defaultTodos);
  const [searchValue, setSearchValue] = useState('');
  
  const totalTodos = todos.length;
  const completedTodos = todos.filter( (todo:propsTodo) => !!todo.completed ).length;

  let searchedTodos = [];
  
  if(searchValue.length < 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter( (todo:propsTodo) => {
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
    <div className="mx-3 md:w-1/2 md:mx-auto mt-4 p-6 md:p-10 bg-slate-900 border border-slate-900 shadow-xl rounded-xl">
      <TodoCounter totalTodos={ totalTodos } completedTodos={ completedTodos }/>
      <div className="flex mb-7">
        <TodoSearch searchValue={ searchValue } setSearchValue={ setSearchValue } />
        <CreateTodoButton/>
      </div>
      <TodoList>
        {
          searchedTodos.map( (todo:propsTodo) => (
            <TodoItem 
              key={ todo.text } 
              text={ todo.text } 
              completed={ todo.completed } 
              onComplete={ () => completeTodo(todo.text) }
              onDelete={ () => deleteTodo(todo.text) } 
            />
          ) )
        }
      </TodoList>
    </div>
  )
}

export default App
