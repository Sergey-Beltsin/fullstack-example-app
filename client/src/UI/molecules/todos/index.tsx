import { FC } from 'react';
import styled from 'styled-components';

import { ITodoItem } from '../../../features/todos-screen/store-types';
import { TodoItem } from '../../atoms';

interface IProps {
  todos: ITodoItem[]
}

type Props = IProps;

export const Todos: FC<Props> = ({ todos }) => (
  <Container>
    {todos.map((item) => <TodoItem text={item.text} />)}
  </Container>
);

const Container = styled.div``;
