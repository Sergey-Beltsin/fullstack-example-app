import { FC } from 'react';
import styled from 'styled-components';

import { primary, white } from '../../../lib/common/constants/theme';

interface IProps {
  onClick: () => void;
}

type Props = IProps;

export const Button: FC<Props> = ({ children, onClick }) => (
  <Container onClick={onClick}>{children}</Container>
);

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 30px;

  border-radius: 5px;
  border: 1px solid ${primary};
  background-color: transparent;
  cursor: pointer;
  
  transition: 0.2s ease;
  
  &:hover {
    background-color: ${primary};
    color: ${white};
  }
`;
