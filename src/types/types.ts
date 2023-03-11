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
    deleteTodo: (text: string) => void
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
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

export const defaultTodos = [
    { text: 'Tarea 1', completed: true },
    { text: 'Tarea 2', completed: true },
    { text: 'Tarea 3', completed: false },
    { text: 'Tarea 4', completed: false },
    { text: 'Compiladores', completed: true },
    { text: 'Perceptron', completed: false },
]