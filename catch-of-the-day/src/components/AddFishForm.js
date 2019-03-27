import React from 'react';

class AddFishForm extends React.Component{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descriptionRef = React.createRef();
    imageRef = React.createRef();
    createFish = (event) => {
        const fish ={
            name:this.nameRef.current.value,
            price:parseFloat(this.priceRef.current.value),
            status:this.statusRef.current.value,
            description:this.descriptionRef.current.value,
            image:this.imageRef.current.value
        }
        event.preventDefault();
        console.log("form submit",fish);
        this.props.addFish(fish);
        event.currentTarget.reset();
    }
    render(){
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text"name="name" ref={this.nameRef} placeholder="name" />
                <input type="text"name="price" ref={this.priceRef} placeholder="price" />
                <select name="status"  ref={this.statusRef}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea name="description" placeholder="description"  ref={this.descriptionRef}></textarea>
                <input type="text"name="image" placeholder="image"  ref={this.imageRef}/>
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;