import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';

import { AddTodo } from '../../../UI/molecules/add-todo';
import { Todos } from '../../../UI/molecules/todos';
import {
  $todos,
  handleActiveTodo,
  handleAddTodo,
  handleDeleteTodo,
  handleFetchTodos,
  handleInput,
} from '../store';

export const TodosScreen: FC = () => {
  const { todos, inputValue } = useStore($todos);

  useEffect(() => {
    handleFetchTodos();
  }, []);

  const addTodoHandler = () => {
    handleAddTodo(inputValue);
    handleInput('');
  };

  return (
    <Container>
      <AddTodo
        handleAddTodo={addTodoHandler}
        value={inputValue}
        setValue={(value) => handleInput(value)}
      />
      <Todos
        todos={todos}
        handleDelete={handleDeleteTodo}
        handleActive={handleActiveTodo}
      />
    </Container>
  );
};
const Container = styled.div`
  max-width: 500px;
`;
