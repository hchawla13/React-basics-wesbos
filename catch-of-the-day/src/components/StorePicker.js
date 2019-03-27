import React from 'react';
import {getFunName , formatPrice} from '../helpers';
class StorePicker extends React.Component{
    // constructor(){
    //     super();
    //     this.doSubmit = this.doSubmit.bind(this);
    // }
    myInput = React.createRef();
    doSubmit = (e) =>{
        e.preventDefault();
        const storeName = this.myInput.current.value;
        console.log("form submitted",storeName);
        
        this.props.history.push(`store/${storeName}`);
    }
    render(){
        console.log(this);
        return (
            <form name="store-picker" onSubmit={this.doSubmit}>
                <p>THis is the storepicker component</p>
                <input ref={this.myInput} type="text" placeholder="enter some value" required></input>
                <button type="button" onClick={this.doSubmit}>Submit</button>
                <p>Random name{getFunName()} </p>
            </form>
        )
    }
}
export default StorePicker;