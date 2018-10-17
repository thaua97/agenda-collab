import React from 'react';

import { Card, Name, Price, Description, Button } from './styles';

const App = () => ( 
  <Card>
    <Name>Curso react</Name>
    <Price>25$</Price>
    <Description>Proffisional curso react</Description>
    <Button primary>buy</Button>
  </Card>
);

export default App;
