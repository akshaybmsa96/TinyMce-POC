import React, { Component } from 'react';
import SlateHeader from '../SlateHeader'
import SlateWrapper from '../SlateWrapper'
import {fetchSlateData,insertElement} from './CanvasWrapper_Action'
import { connect } from 'react-redux';


class CanvasWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount(){
        this.props.fetchSlateData();
    }

    render() {
        return (
            <React.Fragment>
                <div className="rootComponent">
                    <div className="header">
                    <SlateHeader/>
                    </div>
                    <div className="artboard">
                    <SlateWrapper slateLevelData={this.props.slateLevelData}/>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
const mapStateToProps = state => {
    return {
        slateLevelData: state.appStore.slateLevelData
    };
};

export default connect(
    mapStateToProps,
    {
        fetchSlateData,
        insertElement
    }
)(CanvasWrapper);