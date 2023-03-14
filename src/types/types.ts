export interface Todo {
    text: string
    completed: boolean
}

export interface ContextProps { 
    todos: Todo[]
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
    totalTodos: number
    completedTodos: number
    searchedTodos: Todo[]
    completeTodo: (text: string) => void
    addTodo: (text: string) => void
    deleteTodo: (text: string) => void
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    textTodo: string
    setTextTodo: React.Dispatch<React.SetStateAction<string>>,
}

export interface propsAppProvider {
    children: JSX.Element | JSX.Element[]
}

export interface TodoListProps {
    children: React.ReactNode
}

export interface TodoItemProps {
    todo: Todo
}