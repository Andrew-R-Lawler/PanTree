import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Image, Modal, Header, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class FavoriteItem extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'FETCH_SAVED_FAVORITE', payload: this.props.item })
    }

    removeFromFavorites = (event) => {
        this.props.dispatch({ type: 'DELETE_FAVORITE', payload: event.target.value })
    }

    addIngredientsToShoppingList = () => {
        this.props.item.ingredients.map(ingredient => {
            return (this.props.dispatch({ type: 'POST_TO_SHOPPING_LIST', payload: ingredient }))
        })
    }

    render(){
        return(
            <Card>
                <Image src={this.props.item.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.item.label}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Source: {this.props.item.source}</span>
                    </Card.Meta>
                    <Card.Description>
                        <Modal trigger={<Button>More Details</Button>}>
                            <Modal.Header>{this.props.item.label}    <a href={this.props.item.url}><Button>Source Recipe</Button></a></Modal.Header>
                            <Modal.Content image>
                                <Image wrapped size='medium' src={this.props.item.image} />
                                <Modal.Description>
                                    <Header>Ingredients</Header>
                                    <List>
                                        {this.props.item.ingredientLines.map(ingredient => {
                                            return (<List.Item>{ingredient}</List.Item>)
                                        })}
                                    </List>
                                    <Modal
                                        trigger={<Button primary value={this.props.item.uri} onClick={this.removeFromFavorites}>Remove from Favorites</Button>}
                                        header='Remove from Favorites!'
                                        content='Recipe has been removed from your favorites!'
                                        actions={[{ key: 'done', content: 'Done', positive: true }]}
                                    />
                                    <Modal
                                        trigger={<Button secondary onClick={this.addIngredientsToShoppingList}>Add Ingredients to Shopping List</Button>}
                                        header='Add To Shopping List!'
                                        content="This recipe's ingredients have been added to your Shopping List!"
                                        actions={[{ key: 'done', content: 'Done', positive: true }]}
                                    />
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(FavoriteItem);