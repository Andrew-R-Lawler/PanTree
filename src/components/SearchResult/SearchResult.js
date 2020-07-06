import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResult extends Component {
    render(){
        return(
            <div>
                <h3>{this.props.item.recipe.label}</h3>
                <img src = {this.props.item.recipe.image} alt = {this.props.item.recipe.label}/>
                <ul>
                {this.props.item.recipe.ingredients.map((ingredient) => {
                    return(<li>{ingredient.text}</li>)
                })}
                </ul>
                <p>Source: {this.props.item.recipe.source}</p>
                <p>Link to recipe's source page: <a href = {this.props.item.recipe.url}>{this.props.item.recipe.url}</a></p>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(SearchResult);