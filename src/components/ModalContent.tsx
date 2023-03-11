import { useAppContext } from "../hooks";

export function ModalContent() {
    const { setShowModal } = useAppContext();
    
    return (
        <div className="mx-3 md:w-1/2 md:mx-auto mt-4 p-6 md:p-10 bg-slate-900 border border-slate-900 shadow-xl rounded-xl text-slate-500">
            <div>I'm a modal dialog</div>
            <button onClick={ () => setShowModal(false) }> X </button>
        </div>
    );
}