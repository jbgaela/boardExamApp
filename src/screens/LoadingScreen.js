import React, { useEffect } from 'react';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

import Text from '../Components/Text';

const LoadingScreen = () => {
  useEffect(() => {
    setTimeout(async () => {}, 500);
  }, []);

  return (
    <Container>
      <Text title color='#FFFFFF'>
        ReviewerApp
      </Text>
      <LoadingGif source={require('../assets/graphics/book.gif')} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #7a00ff;
`;

const LoadingGif = styled.Image`
  height: 200px;
  width: 200px;
`;

export default LoadingScreen;
