import React, { Component } from 'react';
import { connect } from 'react-redux';

class PanTreeItem extends Component {

    state = {
        editToggle: false,
        itemUpdate: {
            item_name: '',
            quantity: '',
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
    }

    render(){
        return(
            <tr>
                {console.log(this.state)}
                {this.state.editToggle === true ?
                    <td><input placeholder={this.props.item.item_name}></input></td>
                :
                    <td>{this.props.item.item_name}</td>
                }
                {this.state.editToggle === true ?
                    <td><input placeholder={this.props.item.quantity}></input></td>
                :
                    <td>{this.props.item.quantity}</td>
                }
                {this.state.editToggle === true ?
                    <td><button onClick={this.editSubmit}>Submit Changes</button></td>
                :
                    <td>
                        <button value={this.props.item.item_id} onClick={this.editItem}>Edit</button>
                        <button value={this.props.item.id} onClick={this.deleteItem}>Delete</button>
                    </td>
                }
            </tr>
        )
    }
}

const store = reduxState => ({ reduxState });

export default connect(store)(PanTreeItem);