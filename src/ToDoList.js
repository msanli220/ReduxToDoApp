import React,{Component} from "react";

import ToDo from "./Todo";
import { ListItem,ListItemText} from "@mui/material";
export default class ToDoList extends Component{
render(){
    return(
    
            <ListItem>
            <ListItemText
                    primary= {this.props.todos.map(todo=> <ToDo key={todo.id} {...todo} />)}
                  />
            </ListItem>    
    )
}
}