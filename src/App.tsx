import { CreateTodoButton, TodoCounter, TodoList, TodoSearch } from './components'

function App() {
  return (
    <div className="mx-3 md:w-1/2 md:mx-auto mt-4 p-6 md:p-10 bg-slate-900 border border-slate-900 shadow-xl rounded-xl">
      <TodoCounter/>
      <div className="flex mb-7">
        <TodoSearch/>
        <CreateTodoButton/>
      </div>
      <TodoList/>
    </div>
  )
}

export default App