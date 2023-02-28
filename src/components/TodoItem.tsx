import deleteIcon from "../assets/delete.svg";

interface propsTodoItem {
  text: string,
  completed: boolean,
  onComplete: React.MouseEventHandler<HTMLParagraphElement>,
  onDelete: React.MouseEventHandler<HTMLParagraphElement>
}

export const TodoItem = ({ text, completed, onComplete, onDelete }:propsTodoItem) => {
  return (
    <li className={`bg-slate-700 my-3 p-2 flex rounded-md border border-slate-900 hover:border-orange-800 ${completed && 'bg-slate-800'}`}>
      <p onClick={ onComplete } className={`text-slate-500 w-full ${completed && 'line-through '}`}>{ text }</p>
      <img src={deleteIcon} alt='delete' onClick={ onDelete }/>
    </li>
  )
}
