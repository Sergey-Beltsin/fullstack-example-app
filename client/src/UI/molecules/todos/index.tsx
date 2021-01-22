import { FC } from 'react';
import styled from 'styled-components';

import { ITodoItem } from '../../../features/todos-screen/store-types';
import { TodoItem } from '../../atoms';

type Props = {
  todos: ITodoItem[];
  handleActive: (todo: ITodoItem) => void;
  handleDelete: (id: string) => void;
}

export const Todos: FC<Props> = ({ todos, handleDelete, handleActive }) => (
  <Container>
    {todos && todos.map((item) => (
      <TodoItem
        key={item.id}
        text={item.title}
        isActive={item.isActive}
        handleDelete={() => handleDelete(item.id)}
        handleActive={() => handleActive(item)}
      />
    ))}
  </Container>
);

const Container = styled.div``;
