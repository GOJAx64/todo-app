import { createPortal } from 'react-dom';
import { useAppContext } from '../hooks';
import { ModalContent } from './ModalContent';

export function CreateTodoButton() {
  const { showModal, setShowModal } = useAppContext();
  
  return (
    <>
      <button onClick={ () => setShowModal(true) } className="w-2/12 md:w-1/12 border border-slate-700 text-slate-400 font-bold bg-slate-700 ml-2 rounded-md hover:bg-orange-700 hover:border-orange-700">
        +
      </button>
      { showModal && createPortal( <ModalContent/>, document.body) }
    </>
  )
  
}
