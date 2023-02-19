
export const CreateTodoButton = () => {
  
  const onClickButton = () => {
    console.log('add');
  };
  
  return (
    <button onClick={ onClickButton } className="w-2/12 md:w-1/12 border border-slate-700 text-slate-400 font-bold bg-slate-700 ml-2 rounded-md hover:bg-orange-700 hover:border-orange-700">+</button>
  )
}
