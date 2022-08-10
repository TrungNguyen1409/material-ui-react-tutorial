import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';

function App() {
  
  const sayHello = () => {
    console.log("Hello World")
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={sayHello} variant="contained" color='primary'> Hello World</Button>

        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    </div>
  );
}

export default App;
