import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';

class Recipes extends Component {
    render(){
        return(
            <div>
                <h2>Recipe Search</h2>
                <SearchForm />
            </div>
        )
    }
}

export default Recipes;