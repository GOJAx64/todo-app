import { CreateTodoButton, TodoCounter, TodoItem, TodoList, TodoSearch } from './components'
import { useAppContext } from './hooks'
import { Todo } from './types';

function App() {
  const { totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo } = useAppContext();
  
  return (
    <div className="mx-3 md:w-1/2 md:mx-auto mt-4 p-6 md:p-10 bg-slate-900 border border-slate-900 shadow-xl rounded-xl">
      <TodoCounter totalTodos={ totalTodos } completedTodos={ completedTodos }/>
      <div className="flex mb-7">
        <TodoSearch searchValue={ searchValue } setSearchValue={ setSearchValue } />
        <CreateTodoButton/>
      </div>
      <TodoList>
        {
          searchedTodos.map( (todo:Todo) => (
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
