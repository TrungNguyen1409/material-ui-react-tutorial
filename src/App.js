import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckboxExample from './components/CheckboxExample';

function App() {

  const sayHello = () => {
    console.log("Hello World")
  }

  return (
    <div className="App">
      <header className="App-header">
      <CheckboxExample/>
        <ButtonGroup>
          <Button
            startIcon={<SaveIcon sx={{ fontSize: 100 }} />}
            size="large"
            style={{
              fontSize: 20
            }}
            onClick={sayHello}
            variant="contained"
            color='primary'>
            Save
          </Button>
          
          <Button
          
          startIcon={<DeleteIcon sx={{ fontSize: 100 }} />}
            size="large"
            style={{
              fontSize: 20
            }}
            variant="contained"
            color='secondary'>
            Discard    
          </Button>
        </ButtonGroup>


        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
