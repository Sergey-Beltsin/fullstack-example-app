import { FC } from 'react';
import styled from 'styled-components';

import { todo } from '../../../lib/constants/theme';

interface IProps {
  text: string;
}

type Props = IProps;

export const TodoItem: FC<Props> = ({ text }) => (
  <Container>
    {text}
  </Container>
);

const Container = styled.div`
  padding: 10px;
  height: 30px;
  
  background-color: ${todo};
  border-radius: 5px;
  
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
