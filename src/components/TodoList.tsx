import { TodoListProps } from '../types';

export function TodoList(props:TodoListProps) {
  return (
    <section>
      <ul>
        { props.children }
      </ul>
    </section>
  )
}
