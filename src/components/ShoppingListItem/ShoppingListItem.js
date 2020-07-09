import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <tr>
                {console.log(this.state.itemUpdate)}
                {this.state.editToggle === true ?
                    <td><input name='list_item' value={this.state.itemUpdate.list_item} placeholder={this.props.item.list_item} onChange={this.handleChange}></input></td>
                    :
                    <td>{this.props.item.list_item}</td>
                }
                {this.state.editToggle === true ?
                    <td><button onClick={this.editSubmit}>Submit Changes</button></td>
                    :
                    <td>
                        <button value={this.props.item.id} onClick={this.editItem}>Edit</button>
                        <button value={this.props.item.id} onClick={this.deleteItem}>Delete</button>
                    </td>
                }
            </tr>
        )
    }
}

const store = reduxState => ({ reduxState });

export default connect(store)(ShoppingListItem);