import { useAppContext } from '../hooks';

export function TodoSearch() {
  const { searchValue, setSearchValue  } = useAppContext();
  
  return (
    <input 
      placeholder="Search a task" 
      className="bg-slate-800 placeholder-slate-500 border border-slate-800 w-full py-1 px-2 text-slate-500 rounded-md"
      value={ searchValue }
      onChange={ e => setSearchValue(e.target.value) }
    />
  )
}
