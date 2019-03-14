import React from 'react';
import styled from 'styled-components';
import Square from './Square';
import Header from './Header';

const OrangeSquare = styled(Square)`
  background-color: orange;
`;

const GreenSquare = styled(Square)`
  background-color: green;
`;

const App = () => (
  <>
    <Header>Hello World!</Header>
    <Square />
    <OrangeSquare />
    <GreenSquare />
  </>
);

export default App;
