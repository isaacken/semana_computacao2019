import React from 'react';

export default class Item extends React.Component {    
    render() {
        return (
            <li className="Item">
                {this.props.nome}
            </li>
        );
    }
}
