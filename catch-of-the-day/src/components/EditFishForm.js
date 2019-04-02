import React from 'react';
class EditFishForm extends React.Component{
    handleChange = (event) => {
        //update the fish
        //1.Take copy of current fish
        const updatedFish ={
            ...this.props.fish,
            [event.currentTarget.name]:event.currentTarget.value
        }
        this.props.updateFish(this.props.index,updatedFish);
        console.log("updatedFish",updatedFish);
    }
    render(){
        return(
            <div className="fish-edit">
                <input type="text" onChange={this.handleChange} name="name" value={this.props.fish.name}/>
                <input type="text" onChange={this.handleChange} name="price" value={this.props.fish.price}/>
                <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea name="desc" value={this.props.fish.desc} onChange={this.handleChange}/>
                <input type="text" name="image" value={this.props.fish.image} onChange={this.handleChange}/>
            </div>
        )
    }
}
export default EditFishForm;