import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingList extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_SHOPPING_LIST' })
    }

    render(){
        return(
            <div>
                <h2>Shopping List</h2>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(ShoppingList);