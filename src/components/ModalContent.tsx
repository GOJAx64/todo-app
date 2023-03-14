import { useAppContext } from "../hooks";

export function ModalContent() {
    const { setShowModal, addTodo, textTodo, setTextTodo } = useAppContext();
    
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full md:w-5/12 m-6 max-w-3xl border border-slate-900 rounded-lg">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
                    
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-900 rounded-t">
                    <h3 className="text-3xl font-semibold text-slate-400">
                        New ToDo
                    </h3>
                    <button className="p-1 ml-auto border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={ () => setShowModal(false) }>
                        <span className=" text-slate-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                        </span>
                    </button>
                    </div>
                    
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <input 
                            id="text"
                            type="text"
                            placeholder="Task" 
                            className="placeholder-slate-500 w-full my-4 text-slate-500 text-lg bg-slate-700 border border-slate-900 leading-relaxed rounded-lg px-3 py-1"
                            value={ textTodo }
                            onChange={ e => setTextTodo(e.target.value) }
                        />
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-900 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                    <button
                        className="bg-blue-900 text-slate-300 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => addTodo(textTodo)}
                    >
                        Save
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}