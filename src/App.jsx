import React from 'react';
import { Container } from '@mui/material';
import RegistrationForm from './components/Register';

const App = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
      <RegistrationForm />
    </Container>
  );
};

export default App;
