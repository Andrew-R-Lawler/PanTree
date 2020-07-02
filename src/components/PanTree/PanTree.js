import React, { Component } from 'react';
import { connect } from 'react-redux';

class PanTree extends Component {
    
    state = {
        newItem: {
            pantry_item: '',
            quantity: ''
        }
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
    }

    render(){
        return(
            <div>
                {console.log(this.state.newItem)}
                <h2>My PanTree</h2>
                <input name = 'pantry_item' value = {this.state.newItem.pantry_item} onChange = {this.handleChange} placeholder = 'Pantry Item' />
                <input name = 'quantity' value = {this.state.newItem.quantity} onChange = {this.handleChange} placeholder = 'Quantity' />
                <button onClick = {this.handleSubmit}>Add Item</button>
            </div>
        )
    }
}

const store = reduxState => ({ reduxState })

export default connect(store)(PanTree);