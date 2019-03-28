import React from 'react';
import Header from './Header'
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';


class App extends React.Component{
    state = {
        fishes:{},
        orders:{}
    }
    addFish = (fish)=>{
        console.log("adding fish",fish);
        const fishes = { ...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes:fishes
        })
    }
    loadSampleFish = () => {
        this.setState({fishes : sampleFishes})
    }
    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Catch of the day" age="27"/>
                    <ul className="fishes">
                    {Object.keys(this.state.fishes).map((key) => <Fish key={key} details={this.state.fishes[key]}>Hello {key}</Fish>) }
                    </ul>
                </div>
                <Inventory addFish={this.addFish} 
                    loadSampleFish={this.loadSampleFish}/>
                <Order/>
            </div>
        )
    }
}

export default App;