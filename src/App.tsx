import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

const Wrapper = styled.div`
  background-color: #dbb0b0;
  color: yellow;
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

const StyledButton = styled(Button)`
  && {
    background: red;
  }
`

function App() {
  return (
    <Wrapper>
      Test styled components
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <StyledButton variant="contained">Test materialui + styled components</StyledButton>
    </Wrapper>

  );
}

export default App;
