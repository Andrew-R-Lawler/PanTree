import React, { Component } from 'react';
import { connect } from 'react-redux';
import PanTreeItem from '../PanTreeItem/PanTreeItem';

class PanTree extends Component {
    
    state = {
        newItem: {
            pantry_item: '',
            quantity: '',
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_PANTREE_ITEMS' })
    }

    handleChange = event => {
        this.setState({
            newItem: {
                ...this.state.newItem,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = () => {
        this.props.dispatch({
            type: 'ADD_PANTREE_ITEM',
            payload: this.state.newItem
        })
        this.setState({
            newItem: {
                pantry_item: '',
                quantity: ''
            }
        })
    }
    
    editItem = (event) => {
        console.log(event.target.value); 
    }

    deleteItem = (event) => {
        console.log(event.target.value);
        this.props.dispatch({ type: 'DELETE_PANTREE_ITEM', payload: {item_id: event.target.value}})
    }

    render(){
        return(
            <div>
                <h2>My PanTree</h2>
                <input name = 'pantry_item' value = {this.state.newItem.pantry_item} onChange = {this.handleChange} placeholder = 'Pantry Item' />
                <input name = 'quantity' value = {this.state.newItem.quantity} onChange = {this.handleChange} placeholder = 'Quantity' />
                <button onClick = {this.handleSubmit}>Add Item</button>
                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.reduxState.pantreeInventory.map((item) => {
                        return (
                        <PanTreeItem item = {item} />
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const store = reduxState => ({ reduxState })

export default connect(store)(PanTree);