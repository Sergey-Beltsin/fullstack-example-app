import { Dispatch, FC } from 'react';
import styled from 'styled-components';

import { Button, Input } from '../../atoms';

interface IProps {
  value: string;
  setValue: Dispatch<string>;
  handleAddTodo: () => void;
}

type Props = IProps;

export const AddTodo: FC<Props> = ({ handleAddTodo, value, setValue }) => (
  <Container>
    <Input
      value={value}
      setValue={setValue}
    />
    <Button onClick={handleAddTodo}>
      Add todo
    </Button>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin-bottom: 20px;
`;
