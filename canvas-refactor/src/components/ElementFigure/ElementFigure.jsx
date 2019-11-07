import React, { Component } from 'react';
import ElementSeparator from '../ElementSaprator'


class ElementFigure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <div data-uri={this.props.id}>
                        <div className="figurecontent container-label">
                            <input placeholder='enter label...' class="paragraphNumeroUno"></input>
                        </div>
                        <div className="figurecontent container-title">
                            <input placeholder='enter title...' class="paragraphNumeroUno"></input>
                        </div>
                        <div className="figurecontent container-image">
                            <img width="100%" src="https://cite-media-stg.pearson.com/legacy_paths/796ae729-d5af-49b5-8c99-437d41cd2ef7/FPO-image.png" alt="Smiley face" />
                        </div>
                        <div className="figurecontent container-caption">
                            <select>
                                <option value="volvo">Select value 1</option>
                                <option value="saab">Select value 2</option>
                                <option value="mercedes">Select value 3</option>
                                <option value="audi">Select value 4</option>
                            </select>
                        </div>
                        <div className="figurecontent container-credit">
                            <input placeholder='enter credit...' class="paragraphNumeroUno"></input>
                        </div>
                    </div>
                    <div>
                    </div>
                    <ElementSeparator id={this.props.id} cusf={this.props.cusf} />
                </div>
            </React.Fragment>

        );
    }
}
export default ElementFigure;