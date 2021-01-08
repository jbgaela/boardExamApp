import React from 'react';
import styled from 'styled-components';

import Text from '../Components/Text';

const HomeScreen = () => {
  return (
    <Container>
      <Header>
        <Text large light>
          Hi! Welcome back
        </Text>
        <Text large light>
          Jean Benedict,
        </Text>
      </Header>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  margin-top: 50px;
  margin-left: 50px;
`;

export default HomeScreen;
