import React, { Component } from 'react';
import ElementSeparator from '../ElementSaprator'


class ElementAuthoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : ''
        }
    }

    componentDidMount(){

    }

    render() {
        return (
            <React.Fragment>
                <div>
                <div data-uri={this.props.id} dangerouslySetInnerHTML={{__html: this.props.html}}></div>
                <ElementSeparator id={this.props.id} cusf={this.props.cusf}/>
                </div>
            </React.Fragment>

        );
    }
}
export default ElementAuthoring;