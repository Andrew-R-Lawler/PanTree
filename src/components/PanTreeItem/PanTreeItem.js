import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './PanTreeItem.css';

class PanTreeItem extends Component {

    state = {
        editToggle: false,
        itemUpdate: {
            item_id: this.props.item.id,
            item_name: this.props.item.item_name,
            quantity: this.props.item.quantity,
        }
    }

    deleteItem = (event) => {
        console.log(event.target.value);
        this.props.dispatch({ type: 'DELETE_PANTREE_ITEM', payload: { item_id: event.target.value } })
    }

    editItem = (event) => {
        console.log(this.state);
        this.setState({
            editToggle: true
        })
    }

    editSubmit = () => {
        this.setState({
            editToggle: false
        })
        this.props.dispatch({ type: 'UPDATE_PANTREE_ITEM', payload: this.state.itemUpdate })
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
                {console.log(this.state)}
                {this.state.editToggle === true ?
                    <Table.Cell><Input fluid name = 'item_name' value = {this.state.itemUpdate.item_name} placeholder={this.props.item.item_name} onChange = {this.handleChange} /></Table.Cell>
                :
                    <Table.Cell>{this.props.item.item_name}</Table.Cell>
                }
                {this.state.editToggle === true ?
                    <Table.Cell><Input fluid name='quantity' value={this.state.itemUpdate.quantity} placeholder={this.props.item.quantity} onChange={this.handleChange} /></Table.Cell>
                :
                    <Table.Cell>{this.props.item.quantity}</Table.Cell>
                }
                {this.state.editToggle === true ?
                    <Table.Cell className='smaller-width'><Button onClick={this.editSubmit}>Submit Changes</Button></Table.Cell>
                :
                    <Table.Cell className='smaller-width'>
                        <Button primary value={this.props.item.item_id} onClick={this.editItem}>Edit</Button>
                        <Button secondary value={this.props.item.id} onClick={this.deleteItem}>Delete</Button>
                    </Table.Cell>
                }
            </Table.Row>
        )
    }
}

const store = reduxState => ({ reduxState });

export default connect(store)(PanTreeItem);