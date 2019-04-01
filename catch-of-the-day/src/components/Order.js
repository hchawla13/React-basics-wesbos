import React from 'react';
import {formatPrice} from '../helpers';
class Order extends React.Component{
    renderOrder = (key)=>{
        const fish = this.props.fishes[key];
        const quantity = this.props.orders[key];
        const isAvailable = fish && fish.status === 'available';
        //make sure the fish is loaded before we continue
        if(!fish) return null;
        if(!isAvailable){
            return <li key={key}>Sorry {fish ? fish.name : 'fish'} is not available</li>
        }
        return <li key={key}>{quantity} lbs {fish.name}</li>;
    }
    render(){
        const orderIds = Object.keys(this.props.orders);
        const total = orderIds.reduce((accumulator,key)=>{
            const fish = this.props.fishes[key];
            const quantity = this.props.orders[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable){
                return accumulator + (quantity* fish.price)
            }
            return accumulator;
        },0)
        return (
            <div className="order-wrap">
                <h2>Orders</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder
                    )}
                </ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}
export default Order;