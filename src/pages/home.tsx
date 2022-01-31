import React from 'react';
import { actFigure } from '../stuffs/act-figure';
import styled from 'styled-components';

const MBody = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  h1 {
    text-align: center;
  }
`;
const Home: React.FC = (): JSX.Element => {
  React.useEffect(() => {
    actFigure();
  }, []);
  return (
    <MBody>
      <h1>Hi, this is the Homepage</h1>
      <canvas className="canvas js-canvas" width="500" height="500"></canvas>
    </MBody>
  );
};

export default Home;
