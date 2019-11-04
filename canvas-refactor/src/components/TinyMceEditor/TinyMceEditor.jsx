import React, { Component } from 'react';

import { Editor } from '@tinymce/tinymce-react';
// import tinymce from 'tinymce';
// import 'tinymce/themes/silver';
// import "tinymce/skins/ui/oxide/skin.min.css";
// import "tinymce/skins/ui/oxide/content.min.css";
// import "tinymce/skins/content/default/content.css";
// import "tinymce/plugins/lists";
// import "tinymce/plugins/advlist";
// import "tinymce/plugins/paste";
// import ElementWrapper from '../ElementWrapper'



class TinyMceEditor extends Editor {

    constructor(props) {
        super(props);
        //console.log("hello",this)

    }

    // componentWillMount() {

    // }
//     componentDidMount() {
// console.log("component fro tiny mce")
//     }

    // componentDidUpdate() {
    //     tinymce.init(this.props.init)
    // }

    // render() {
    //     return (
    //         <div className="tiny-mce-editor-area mce-content-body mce-edit-focus" contentEditable="true">
    //             <ElementWrapper cusf={this.props.cusf} slateLevelData={this.props.content} />
    //         </div>
    //     )
    // }


}
export default TinyMceEditor;