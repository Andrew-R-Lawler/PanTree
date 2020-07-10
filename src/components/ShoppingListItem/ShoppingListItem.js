import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class ShoppingListItem extends Component {

    state = {
        editToggle: false,
        itemUpdate: {
            list_item: this.props.item.list_item,
            id: this.props.item.id
        }
    }

    deleteItem = (event) => {
        console.log(event.target.value, 'event.target.value');
        this.props.dispatch({ type: 'DELETE_LIST_ITEM', payload: event.target.value})
    }

    editItem = (event) => {
        console.log(this.state);
        this.setState({
            editToggle: true,
        })
    }

    editSubmit = () => {
        this.setState({
            editToggle: false,
        })
        this.props.dispatch({ type: 'UPDATE_LIST_ITEM', payload: this.state.itemUpdate })
    }

    handleChange = event => {
        this.setState({
            itemUpdate: {
                ...this.state.itemUpdate,
                [event.target.name]: event.target.value
            }
        })
    }

    render(){
        return(
            <Table.Row>
                {this.state.editToggle === true ?
                    <Table.Cell><Input fluid name='list_item' value={this.state.itemUpdate.list_item} placeholder={this.props.item.list_item} onChange={this.handleChange}></Input></Table.Cell>
                    :
                    <Table.Cell>{this.props.item.list_item}</Table.Cell>
                }
                {this.state.editToggle === true ?
                    <Table.Cell textAlign='right'><Button onClick={this.editSubmit}>Submit Changes</Button></Table.Cell>
                    :
                    <Table.Cell textAlign='right'>
                        <Button primary value={this.props.item.id} onClick={this.editItem}>Edit</Button>
                        <Button secondary value={this.props.item.id} onClick={this.deleteItem}>Delete</Button>
                    </Table.Cell>
                }
            </Table.Row>
        )
    }
}

const store = reduxState => ({ reduxState });

export default connect(store)(ShoppingListItem);