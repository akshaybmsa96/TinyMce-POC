import React, { useEffect, useState, useRef, Component } from 'react'

class ElementSeparator extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    fun=()=>{
        console.log("hello")
    }
    render() {
        return (
            <div className="element-separator" contentEditable="false">
                     --------------------------------------------------------
                     <button className={`addElement`} data-uri={this.props.id} onClick={this.props.cusf}>Add</button>
            </div>
        )
    }

}

export default ElementSeparator;
