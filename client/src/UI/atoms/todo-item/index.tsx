import { FC } from 'react';
import styled from 'styled-components';

import { border, todo } from '../../../lib/common/constants/theme';
import { TodoActions } from '../todo-actions';

type Props = {
  text: string;
  isActive: boolean;
  handleDelete: () => void;
  handleActive: () => void;
};

type TextProps = {
  isActive: boolean;
};

export const TodoItem: FC<Props> = ({
  text,
  isActive,
  handleDelete,
  handleActive,
}) => (
  <Container>
    <Text isActive={isActive}>
      {text}
    </Text>
    <TodoActions
      handleDelete={handleDelete}
      handleActive={handleActive}
      isActive={isActive}
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 10px;
  min-height: 40px;
  
  background-color: ${todo};
  border-radius: 5px;
  border: 1px solid ${border};
  
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Text = styled.span<TextProps>`
  display: block;
  
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ isActive }) => !isActive && ('text-decoration: line-through;')}
`;
