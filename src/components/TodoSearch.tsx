import { TodoSearchProps } from '../types';

export function TodoSearch({ searchValue, setSearchValue }:TodoSearchProps) {
  
  const onSearchValueChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setSearchValue(e.target.value);
  }
  
  return (
    <input 
      placeholder="Search a task" 
      className="bg-slate-800 placeholder-slate-500 border border-slate-800 w-full py-1 px-2 text-slate-500 rounded-md"
      value={ searchValue }
      onChange={ onSearchValueChange }
    />
  )
}
