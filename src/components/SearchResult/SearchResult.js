import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResult extends Component {

    addToFavorites = () => {
        console.log('in addToFavorites', this.props.item);
        this.props.dispatch({ type: 'POST_TO_FAVORITES', payload: this.props.item.recipe.uri })
    }

    addIngredientsToShoppingList = () => {
        console.log('adding ingredients to shopping list', this.props.item.recipe.ingredientLines);
        this.props.item.recipe.ingredients.map(ingredient => {
            return (this.props.dispatch({ type: 'POST_TO_SHOPPING_LIST', payload: ingredient }))
        })
    }

    render(){
        return(
            <div>
                <h3>{this.props.item.recipe.label}</h3>
                <img src = {this.props.item.recipe.image} alt = {this.props.item.recipe.label}/>
                <ul>
                {this.props.item.recipe.ingredients.map((ingredient) => {
                    return(<li key = {ingredient.id}>{ingredient.text}</li>)
                })}
                </ul>
                <p>Source: {this.props.item.recipe.source}</p>
                <p>Link to recipe's source page: <a href = {this.props.item.recipe.url}>{this.props.item.recipe.url}</a></p>
                <button onClick={this.addToFavorites}>Add Recipe to Favorites</button>
                <button onClick={this.addIngredientsToShoppingList}>Add ingredients to Shopping List</button>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(SearchResult);