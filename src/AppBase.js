import React from 'react';
import Lista from './Lista';
import Item from './Item';

export default class AppBase extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: [
                {name: "Bolacha"},
                {name: "Batata"},
                {name: "Biscoito"}
            ]
        }
    }

    renderItems = () => {
        return this.state.items.map((item, index) => {
            return (
                <Item nome={item.name} key={item.name} />
            );
        });
    }

    render() {
        return (
            <div className="AppBase">
                <Lista type="circle">
                    { this.renderItems() }
                </Lista>
            </div>
        );
    }
}