import React from 'react';
import Button from './components/Buttons';
import Input from './components/Inputs';

function App() {
  return (
    <div>
      <Button type="activate" content="완료"></Button>
      <Button type="deactivate"></Button>
      <Button>완료</Button>
      <Input type="email"></Input>
      <Input type="password"></Input>
    </div>
  );
}

export default App;
