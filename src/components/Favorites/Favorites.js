import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';
import { Container, Divider, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Favorites.css';

class Favorites extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_FAVORITES' })
    }

    render(){
        return(
            <div>
                <Container textAlign='left'>
                    <h1 class='header'>Favorites</h1>
                </Container>
                <Divider />
                <Container>
                    <Grid className='grid' relaxed columns={3}>
                        {this.props.reduxState.getFavorites.map(item => {
                            return (<div class='result'><FavoriteItem item={item[0]} /></div>)
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

export default connect(store)(Favorites);