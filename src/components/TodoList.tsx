import { useAppContext } from '../hooks';
import { Todo } from '../types';
import { TodoItem } from './';

export function TodoList() {
  const { searchedTodos } = useAppContext();

  return (
    <section>
      <ul>
        { searchedTodos.map( (todo:Todo) => <TodoItem key={ todo.text } todo={ todo } />) }
      </ul>
    </section>
  )
}
