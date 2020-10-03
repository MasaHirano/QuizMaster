import React, { ReactNode } from 'react';
import { Container, Header, Icon, Divider } from 'semantic-ui-react';

type Props = {
  children: ReactNode;
};

const App = ({ children }: Props) => (
  <Container text>
    <Header as="h2" icon textAlign="center" color="teal">
      <Icon name="question" circular />
      <Header.Content>Quiz Master</Header.Content>
    </Header>
    <Divider section />
    {children}
  </Container>
);

export default App;
