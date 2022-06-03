import React, { Component} from 'react';
import { connect } from 'react-redux';
import { addToDo } from './actions/action';
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';


import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { Paper } from '@mui/material';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
class App extends Component{
  
  render(){
    const {dispatch, eklenmisToDos} = this.props
    return (
      <div className='App container'>
         <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar style={{backgroundColor:"#240046"}}>
          <Toolbar>
            <Typography variant="h6" component="div">
            To Do List React Redux
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
      <Paper elevation={24}  >
        <Box sx={{ my: 2 }}>
        <AddToDo onAddClick ={text=>dispatch(addToDo(text))} />
        <ToDoList  todos={eklenmisToDos} />
        </Box>
        </Paper>
      </Container>
    </React.Fragment>

       
      </div>
    )
  }
}

function select(state){
  return{
    eklenmisToDos: state.todos
  }
}

export default connect(select)(App);