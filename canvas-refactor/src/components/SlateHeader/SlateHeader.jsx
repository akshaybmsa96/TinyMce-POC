import React, { Component } from 'react';


class SlateHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <div className="header-section">
                    <div className="header-title">HEADER SECTION</div>
                    <div className="tinymce-wrapper"><div id="tinymceToolbar"></div></div>
                </div>
            </React.Fragment>

        );
    }
}
export default SlateHeader;