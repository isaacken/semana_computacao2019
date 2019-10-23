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
            ],
            temp: 1,
            content: 'conteudo'
        }
    }

    renderItems = () => {
        return this.state.items.map((item, index) => {
            return (
                <Item nome={item.name} key={item.name} />
            );
        });
    }

    changeInput = (event) => {
        return (e) => {
            this.setState({
                temp: e.target.value
            });   
        }
    }

    gogogo = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="AppBase">
                <Lista type="circle">
                    { this.renderItems() }
                </Lista>
                <form onChange={this.gogogo}>
                    <input name="temp" type="range" min="1" max="5" step="1" value={this.state.temp} /* onChange={this.changeInput("range")} */ />
                    <p>Nota {this.state.temp}</p>
                    <input name="content" type="text" />
                    <p>{this.state.content}</p>
                </form>
            </div>
        );
    }
}