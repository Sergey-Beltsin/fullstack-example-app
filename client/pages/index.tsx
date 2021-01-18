import { FC } from 'react';
import styled from 'styled-components';

import { TodosScreen } from '../src/features/todos-screen/containers';

const Home: FC = () => (
  <Container>
    <TodosScreen />
  </Container>
);

const Container = styled.div``;

export default Home;
