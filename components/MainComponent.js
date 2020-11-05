import React, { Component } from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dsihes : DISHES,
        }
    };

    render() {
        return(
            <Menu dishes = {this.state.dsihes} />
        )
    }
}

export default Main;