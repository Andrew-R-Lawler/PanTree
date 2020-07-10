import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from '../SearchResult/SearchResult';
import { Container, Divider, Grid, Form, Button, Input, } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Recipes.css'

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
                <Container textAlign='left'>
                <h1 class='header'>Recipe Search</h1>
                </Container>
                <Divider />
                <Form>
                <Input icon='search' onChange = {this.handleChange} name = 'search_query' placeholder = 'Search for Recipes!' value = {this.state.search_query} />
                <Button onClick = {this.searchRecipe}>Search</Button>
                </Form>
                <Container textAlign='left'>
                <h2>Search Results</h2>
                </Container>
                <Divider />
                <Container>
                    <Grid relaxed columns={3}>
                        {this.props.reduxState.results.map((item) => {
                            return (<div class='result'><SearchResult key={item.id} item={item} /></div>)
                        })}
                    </Grid>
                </Container>
            </div>
        )
    }
}
const store = reduxState => ({
    reduxState
})

export default connect(store)(Recipes);