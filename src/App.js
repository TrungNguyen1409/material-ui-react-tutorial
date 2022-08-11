import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckboxExample from './components/CheckboxExample';
import TextField from './components/TextFieldExample';

import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';


const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
});
function StyledButton() {
  return <MyButton>Styled Button</MyButton>;
}


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

function ButtonStyled(){
  const classes = useStyles()
  return <Button classname ={classes.root}>Test Styled Button</Button>

}

function App() {

  const sayHello = () => {
    console.log("Hello World")
  }

  return (
    <div className="App">
      <header className="App-header">
        <StyledButton/>
        <ButtonStyled/>
        <TextField></TextField>
        <CheckboxExample />
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
