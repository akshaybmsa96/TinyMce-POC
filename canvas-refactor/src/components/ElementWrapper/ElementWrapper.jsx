import React, { Component } from 'react';

import ElementAuthoring from '../ElementAuthoring'


class ElementWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : ''
        }
    }
    componentDidMount(){
        console.log("ABCD")
    }

    render() {
        return (
            <React.Fragment>
                <div>{
                this.props.slateLevelData&&this.props.slateLevelData['urn:pearson:manifest:d9023151-3417-4482-8175-fc965466220e'].contents.bodymatter.map((obj) => {
                    return (<ElementAuthoring id={obj.id} cusf={this.props.cusf} html = {obj.html.text} />)
                })
                }
                </div>
            </React.Fragment>

        );
    }
}
export default ElementWrapper;