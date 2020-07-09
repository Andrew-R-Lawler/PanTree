import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

class Favorites extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_FAVORITES' })
    }

    render(){
        return(
            <div>
                <h2>Favorites</h2>
                <ul>
                {this.props.reduxState.getFavorites.map(item => {
                    return(<FavoriteItem item = {item[0]} />)
                })}
                </ul>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(Favorites);