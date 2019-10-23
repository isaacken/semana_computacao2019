import React from 'react';
import './Lista.css';

export default class Lista extends React.Component {
    render () {
        return (
            <ul type={this.props.type !== undefined? this.props.type : 'square'} className="Lista">
                {this.props.children}
            </ul>
        );
    }
}
