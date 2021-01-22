import { Dispatch, FC } from 'react';
import styled from 'styled-components';

import { border } from '../../../lib/common/constants/theme';

interface IProps {
  value: string;
  setValue: Dispatch<string>;
}

type Props = IProps;

export const Input: FC<Props> = ({ value, setValue }) => (
  <Container>
    <StyledInput
      value={value}
      onChange={({ target }) => setValue(target.value)}
    />
  </Container>
);

const Container = styled.div`
  width: 300px;
  height: 30px;
  padding: 5px;

  border-color: ${border};
  border-radius: 5px;
  border: 1px solid ${border};
`;

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  
  border: none;
`;
