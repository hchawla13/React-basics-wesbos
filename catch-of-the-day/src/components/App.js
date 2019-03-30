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
        //1.take copy of existing state
        const fishes = { ...this.state.fishes};
        //2.add new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3.Add mew fishes object to state
        this.setState({
            fishes:fishes
        })
    }
    loadSampleFish = () => {
        this.setState({fishes : sampleFishes})
    }
    addToOrder = (key) => {
        const orders = {... this.state.orders};
        orders[key] = orders[key] + 1 || 1;
        this.setState({orders});
    }
    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Catch of the day" age="27"/>
                    <ul className="fishes">
                    {Object.keys(this.state.fishes).map((key) => 
                        <Fish  key={key} details={this.state.fishes[key]} index={key} addToOrder = {this.addToOrder}/>)
                    }
                    </ul>
                </div>
                <Inventory addFish={this.addFish} 
                    loadSampleFish={this.loadSampleFish}/>
                <Order fishes={this.state.fishes} orders={this.state.orders}/>
            </div>
        )
    }
}

export default App;