import { CreateTodoButton, TodoCounter, TodoItem, TodoList, TodoSearch } from './components'
import { useAppContext } from './hooks'
import { Todo } from './types';

function App() {
  const { searchedTodos } = useAppContext();
  
  return (
    <div className="mx-3 md:w-1/2 md:mx-auto mt-4 p-6 md:p-10 bg-slate-900 border border-slate-900 shadow-xl rounded-xl">
      <TodoCounter/>
      <div className="flex mb-7">
        <TodoSearch/>
        <CreateTodoButton/>
      </div>
      <TodoList>
        {
          searchedTodos.map( (todo:Todo) => <TodoItem key={ todo.text } todo={ todo } />)
        }
      </TodoList>
    </div>
  )
}

export default App
