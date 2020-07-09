import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteItem extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'FETCH_SAVED_FAVORITE', payload: this.props.item })
    }

    removeFromFavorites = (event) => {
        console.log('event.target.value', event.target.value);
        this.props.dispatch({ type: 'DELETE_FAVORITE', payload: event.target.value })
    }

    render(){
        return(
            <div>
                <h3>{this.props.item.label}</h3>
                <img src={this.props.item.image} alt={this.props.item.label} />
                <ul>
                    {this.props.item.ingredients.map(ingredient => {
                        return(<li>{ingredient.text}</li>)
                    })}
                </ul>
                <p>Source: {this.props.item.source}</p>
                <p>Link to recipe's source page: <a href = {this.props.item.url}>{this.props.item.url}</a></p>
                <button value = {this.props.item.uri} onClick={this.removeFromFavorites}>Remove Recipes from Favorites</button>
                <button onClick={this.addIngredientsToShoppingList}>Add Ingredients to Shopping List</button>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(FavoriteItem);