import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Image, Modal, Header, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class SearchResult extends Component {

    addToFavorites = () => {
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
            <Card>
                <Image src={this.props.item.recipe.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.item.recipe.label}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Source: {this.props.item.recipe.source}</span>
                    </Card.Meta>
                    <Card.Description>
                        <Modal trigger={<Button>More Details</Button>}>
                            <Modal.Header>{this.props.item.recipe.label}    <a href={this.props.item.recipe.url}><Button>Source Recipe</Button></a></Modal.Header>
                            <Modal.Content image>
                                <Image wrapped size = 'medium' src = {this.props.item.recipe.image} />
                                <Modal.Description>
                                    <Header>Ingredients</Header>
                                    <List>
                                        {this.props.item.recipe.ingredientLines.map(ingredient => {
                                            return(<List.Item>{ingredient}</List.Item>)
                                        })}
                                    </List>
                                    <Modal
                                        trigger={<Button primary onClick={this.addToFavorites}>Add to Favorites</Button>}
                                        header='Add To Favorites!'
                                        content='Recipe has been added to your favorites, Check out the favorites tab to easily access it in the future!'
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

export default connect(store)(SearchResult);