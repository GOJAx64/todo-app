import deleteIcon from '../assets/delete.svg';
import { useAppContext } from '../hooks';
import { TodoItemProps } from '../types';

export function TodoItem( { todo }:TodoItemProps ) {
  const { completeTodo, deleteTodo } = useAppContext();

  return (
    <li className={`bg-slate-700 my-3 p-2 flex rounded-md border border-slate-900 hover:border-orange-800 ${todo.completed && 'bg-slate-800'}`}>
      <p onClick={ () => completeTodo(todo.text) } className={`text-slate-500 w-full ${todo.completed && 'line-through '}`}>{ todo.text }</p>
      <img src={deleteIcon} alt='delete' onClick={ () => deleteTodo(todo.text) }/>
    </li>
  )
}
