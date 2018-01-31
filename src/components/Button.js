import React,{Component} from 'react';
import './Button.css';


    class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

            <button className="button" >{this.props.title}</button>


            )

    }
    };

    export default Button;