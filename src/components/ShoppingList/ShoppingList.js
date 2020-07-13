import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import { Table, Input, Button, Form, Container, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './ShoppingList.css';

class ShoppingList extends Component {

    state = {
        text: '' 
    }

    componentDidMount(){
        this.props.dispatch({ type: 'GET_SHOPPING_LIST' })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postItem = () => {
        this.props.dispatch({ type: 'POST_TO_SHOPPING_LIST', payload: this.state })
        this.setState({ 
            text: ''
        })
    }

    render(){
        return(
            <div>
                <Container textAlign='left'>
                <h1 class='header'>Shopping List</h1>
                </Container>
                <Divider />
                <Form class='add' onSubmit={this.postItem}>
                    <Input onChange={this.handleChange} name='text' placeholder='Shopping List Item' value={this.state.text} />
                    <Button type='submit'>Add to Shopping List</Button>
                </Form>
                <Container>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Ingredients to Purchase</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.props.reduxState.shoppingList.map(item => {
                                return(<ShoppingListItem item = {item} />)
                            })}
                        </Table.Body>
                    </Table>
                </Container>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(ShoppingList);