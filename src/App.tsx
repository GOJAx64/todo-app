import { CreateTodoButton, TodoCounter, TodoItem, TodoList, TodoSearch } from './components'

const todos = [
  { text: 'Tarea 1', completed: true },
  { text: 'Tarea 2', completed: true },
  { text: 'Tarea 3', completed: false },
  { text: 'Tarea 4', completed: false },
]


function App() {
  return (
    <div className="mx-3 md:w-1/2 md:mx-auto mt-4 p-6 md:p-10 bg-slate-900 border border-slate-900 shadow-xl rounded-xl">
      <TodoCounter/>
      <div className="flex mb-7">
        <TodoSearch/>
        <CreateTodoButton/>
      </div>
      <TodoList>
        {
          todos.map( todo => (
            <TodoItem key={ todo.text } text={ todo.text } completed={ todo.completed }/>
          ) )
        }
      </TodoList>
    </div>
  )
}

export default App
