import deleteIcon from "../assets/delete.svg";

interface propsTodoItem {
  text: string,
  completed: boolean
}

export const TodoItem = ({text, completed}:propsTodoItem) => {
  
  const onCompleted = () => {
    console.log("Completed");
  };

  const onDeleted = () => {
    console.log("Deleted");
  };
  
  return (
    <li className={`bg-slate-700 my-3 p-2 flex rounded-md border border-slate-900 hover:border-orange-800 ${completed && 'bg-slate-800'}`}>
      <p onClick={ onCompleted } className={`text-slate-500 w-full ${completed && 'line-through '}`}>{ text }</p>
      <img src={deleteIcon} alt='delete' onClick={ onDeleted }/>
    </li>
  )
}
