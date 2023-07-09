import React, { Component } from 'react';

export class VisibilityControl extends Component {

    render = () =>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={ this.props.isChecked } onChange={ (e) => this.props.callback(e.target.checked) } />
        </div>
}