export interface Todo {
    text: string
    completed: boolean
}

export const defaultTodos = [
    { text: 'Tarea 1', completed: true },
    { text: 'Tarea 2', completed: true },
    { text: 'Tarea 3', completed: false },
    { text: 'Tarea 4', completed: false },
    { text: 'Compiladores', completed: true },
    { text: 'Perceptron', completed: false },
]

export interface ContextProps { 
    todos: Todo[]
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
    totalTodos: number
    completedTodos: number
    searchedTodos: Todo[]
    completeTodo: (text: string) => void
    deleteTodo: (text: string) => void
}

export interface propsTodoItem {
    text: string,
    completed: boolean,
    onComplete: React.MouseEventHandler<HTMLParagraphElement>,
    onDelete: React.MouseEventHandler<HTMLParagraphElement>
}

export interface TodoSearchProps {
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>,
}

export interface TodoCounterProps {
    totalTodos: number,
    completedTodos: number,
}

export interface TodoListProps {
    children: React.ReactNode
}
  