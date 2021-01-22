import { FC } from 'react';
import styled from 'styled-components';

import { border } from '../../../lib/common/constants/theme';
import { CheckIcon } from '../../../lib/common/components/icons/CheckIcon';
import { DeleteIcon } from '../../../lib/common/components/icons/DeleteIcon';

type Props = {
  handleDelete: () => void;
  handleActive: () => void;
  isActive: boolean;
};

type WrapperProps = {
  isActive?: boolean;
  deleteIcon?: boolean;
};

export const TodoActions: FC<Props> = ({ handleActive, handleDelete, isActive }) => (
  <Container>
    <Wrapper onClick={handleActive} isActive={isActive}>
      <CheckIcon />
    </Wrapper>
    <Wrapper onClick={handleDelete} deleteIcon>
      <DeleteIcon />
    </Wrapper>
  </Container>
);

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 20px;
  height: 20px;
  padding: 5px;
  
  border: 1px solid ${border};
  border-radius: 5px;
  cursor: pointer;
  
  &:first-child {
    margin-right: 5px;
  }
  
  & svg {
    width: 20px;
    height: 20px;
    
    & path {
      transition: 0.2s ease;
      ${({ deleteIcon, isActive }) => !deleteIcon && !isActive && ('fill: green;')}
    }
  }
  
  &:hover {
    & svg path {
      fill: ${({ deleteIcon }) => (deleteIcon ? 'red' : 'green')};
    }
  }
`;
