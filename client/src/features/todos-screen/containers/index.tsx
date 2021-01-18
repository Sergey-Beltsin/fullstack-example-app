import { FC } from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';

import { AddTodo } from '../../../UI/molecules/add-todo';
import { Todos } from '../../../UI/molecules/todos';
import { $todos, handleInput } from '../store';

export const TodosScreen: FC = () => {
  const { todos, inputValue } = useStore($todos);

  return (
    <Container>
      <AddTodo
        handleAddTodo={() => console.log('add')}
        value={inputValue}
        setValue={(value) => handleInput(value)}
      />
      <Todos todos={todos} />
    </Container>
  );
};
const Container = styled.div`
  max-width: 500px;
`;
