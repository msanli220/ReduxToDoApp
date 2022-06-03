import React,{Component} from "react";

export default class ToDo extends Component{
    render(){
        return(
            <li className="collection-item">
                {this.props.text}
            </li>
        )
    }
}