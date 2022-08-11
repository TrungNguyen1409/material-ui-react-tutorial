import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckboxExample from './components/CheckboxExample';
import TextField from './components/TextFieldExample';
import { makeStyles } from '@mui/styles';
import { styled, Container } from '@mui/system';
import "@fontsource/roboto";
import { Grid, Paper, Typography } from '@mui/material';

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

function ButtonStyled() {
  const classes = useStyles()
  return <Button classname={classes.root}>Test Styled Button</Button>

}

function App() {

  const sayHello = () => {
    console.log("Hello World")
  }

  return (
    <Container maxWidth="sm">
      <div className="App">
        <header className="App-header">
          <Typography variant="h2">
            Welcome to MUI
          </Typography>
          <Typography variant="body1">
            Learn how to use Material UI
          </Typography>
          <StyledButton />
          <ButtonStyled />
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Paper style={{ height: 75, width: '100%', }} />
            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50, }} />

            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50, }} />

            </Grid>
          </Grid>


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
    </Container>

  );
}

export default App;
