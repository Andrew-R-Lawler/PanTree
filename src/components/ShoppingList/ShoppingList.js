import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

class ShoppingList extends Component {

    state = {
        text: '' 
    }

    componentDidMount(){
        this.props.dispatch({ type: 'GET_SHOPPING_LIST' })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postItem = () => {
        this.props.dispatch({ type: 'POST_TO_SHOPPING_LIST', payload: this.state })
        this.setState({ 
            text: ''
        })
    }

    render(){
        return(
            <div>
                {console.log(this.state)}
                <h2>Shopping List</h2>
                <form onSubmit={this.postItem}>
                    <input onChange={this.handleChange} name='text' placeholder='Shopping List Item' value={this.state.text} />
                    <button type='submit'>Add to Shopping List</button>
                </form>
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