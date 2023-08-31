import React, { Component } from "react";
import { FormValidator } from "./FormValidator";
import { ValidationMessage } from "./ValidationMessage";

export class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Bob",
            // flavor: "Vanilla",
            // toppings: ["Strawberries"]
            // twoScoops: false
            order: ""
        }
        
        this.flavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanilla"]
        this.toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"]
    }

    updateFormValue = (event) => {
        this.setState(
            { [event.target.name]: event.target.value },
            () => this.props.submit(this.state)
        )
    }

    // updateFormValueOptions = (event) => {
    //     let options = [...event.target.options].filter(o => o.selected).map(o => o.value)
    //     this.setState(
    //         { [event.target.name]: options },
    //         () => this.props.submit(this.state)
    //     )
    // }

    // updateFormValueCheck = (event) => {
    //     event.persist();
    //     this.setState(state => {
    //         if (event.target.checked) {
    //             state.toppings.push(event.target.name);
    //         } else {
    //             let index = state.toppings.indexOf(event.target.name)
    //             state.toppings.splice(index, 1)
    //         }
    //     }, () => this.props.submit(this.state))
    // }

    render() {
        return <div className="h5 bg-info text-white p-2">
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" name="name" value={ this.state.name } onChange={ this.updateFormValue } />
            </div>
            <div className="form-group">
                <label>Order</label>
                <textarea className="form-control" name="order" value={ this.state.order } onChange={ this.updateFormValue } />
            </div>
        </div>
    }
}