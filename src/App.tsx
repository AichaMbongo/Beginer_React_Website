import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import CustomStyles from './components/CustomButton';
import { Theme } from './components/theme/Theme';
import BasicTextFields from './components/Form';
import Centered from './components/Centered';

function App() {
  return (
    <Theme>
    <div className="App">
    <h1>Login</h1>
          {/* <CustomStyles /> */}
          
          <Button variant="contained"> Hello world </Button>
          < BasicTextFields />

          

         
         
        
      
    </div>
    </Theme>
  );
}

export default App;
