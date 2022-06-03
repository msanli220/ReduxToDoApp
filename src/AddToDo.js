import React,{Component} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default class AddToDo extends Component{
    render(){
        return(
        <div>
             <Box sx={{ '& > :not(style)': { m: 1 } }}>
             <Stack spacing={2} direction="row">
             <Fab color="primary" aria-label="add" style={{margin:10}}  onClick={((e)=>{this.handleClick(e)})} >
                  <AddIcon />
             </Fab>
             
              <input type='text' ref='input'/>
             </Stack>
             </Box>
    
        </div>)
    }

    handleClick(e){
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value=''
    }
}

