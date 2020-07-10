import React, { Component } from 'react';
import { connect } from 'react-redux';
import PanTreeItem from '../PanTreeItem/PanTreeItem';
import { Table, Input, Button, Form, Container, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class PanTree extends Component {
    
    state = {
        newItem: {
            pantry_item: '',
            quantity: '',
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_PANTREE_ITEMS' })
    }

    handleChange = event => {
        this.setState({
            newItem: {
                ...this.state.newItem,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = () => {
        this.props.dispatch({
            type: 'ADD_PANTREE_ITEM',
            payload: this.state.newItem
        })
        this.setState({
            newItem: {
                pantry_item: '',
                quantity: ''
            }
        })
    }

    render(){
        return(
            <div>
                <Container textAlign='left'>
                    <h1 class='header'>My PanTree</h1>
                </Container>
                <Divider />
                <Form class='add'>
                    <Input fluid name = 'pantry_item' value = {this.state.newItem.pantry_item} onChange = {this.handleChange} placeholder = 'Pantry Item' />
                    <Input fluid name = 'quantity' value = {this.state.newItem.quantity} onChange = {this.handleChange} placeholder = 'Quantity' />
                    <Button onClick = {this.handleSubmit}>Add Item</Button>
                </Form>
                <Container>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Item Name</Table.HeaderCell>
                                <Table.HeaderCell>Quantity</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        {this.props.reduxState.pantreeInventory.map((item) => {
                            return (
                            <PanTreeItem key = {item.id} item = {item} />
                            )
                        })}
                        </Table.Body>
                    </Table>
                </Container>
            </div>
        )
    }
}

const store = reduxState => ({ reduxState })

export default connect(store)(PanTree);