import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

class ShoppingList extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_SHOPPING_LIST' })
    }

    render(){
        return(
            <div>
                <h2>Shopping List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Ingredients to Purchase</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.shoppingList.map(item => {
                            return(<ShoppingListItem item = {item} />)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(ShoppingList);