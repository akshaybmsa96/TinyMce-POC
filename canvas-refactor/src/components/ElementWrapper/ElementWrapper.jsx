import React, { Component } from 'react';

import ElementAuthoring from '../ElementAuthoring'
import ElementFigure from '../ElementFigure'


class ElementWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : ''
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>{
                this.props.slateLevelData&&this.props.slateLevelData['urn:pearson:manifest:d9023151-3417-4482-8175-fc965466220e'].contents.bodymatter.map((obj) => {
                    if(obj.type==="element-authoredtext")
                    return (
                    <ElementAuthoring id={obj.id} cusf={this.props.cusf} html = {obj.html.text} />)
                    else if(obj.type==="figure"){
                        return (<ElementFigure id={obj.id}/>)
                    }
                })
                }
                </div>
            </React.Fragment>

        );
    }
}
export default ElementWrapper;