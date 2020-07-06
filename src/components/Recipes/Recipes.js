import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from '../SearchResult/SearchResult';

class Recipes extends Component {

    state = {
        search_query: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    searchRecipe = () => {
        this.props.dispatch({ type: 'SEARCH_RECIPES', payload: this.state.search_query })
        this.setState({
            search_query: '',
        })
    }

    render(){
        return(
            <div>
                <h2>Recipe Search</h2>
                <input onChange = {this.handleChange} name = 'search_query' placeholder = 'Search for Recipes!' value = {this.state.search_query} />
                <button onClick = {this.searchRecipe}>Search</button>
                <h2>Search Results</h2>
                {this.props.reduxState.results.map((item) => {
                    return (<SearchResult item = {item} />)
                })}
            </div>
        )
    }
}
const store = reduxState => ({
    reduxState
})

export default connect(store)(Recipes);