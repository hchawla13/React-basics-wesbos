import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component{
    render(){
        return(
            <div className="inventory">
                <h2>This is inventory component</h2>
                <AddFishForm addFish = {this.props.addFish}/>
                <button onClick={this.props.loadSampleFish}> Load Sample Fish</button>
            </div>
        )
    }
}

export default Inventory;