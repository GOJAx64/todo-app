import { useAppContext } from '../hooks';

export function TodoCounter() {
  const { totalTodos, completedTodos } = useAppContext();
  
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center text-orange-700">ToDo App</h1>
      <h2 className=" rounded-lg text-xl my-5 text-slate-600 uppercase bg-slate-900 text-center">completed { completedTodos } of { totalTodos }</h2>
    </>
  )
}

