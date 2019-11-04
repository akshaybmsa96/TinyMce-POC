import React, { Component } from 'react';

import { Editor } from '@tinymce/tinymce-react';
import TinyMceEditor from '../TinyMceEditor'
import { TinyMceConfig } from '../../config/TinyMceConfig'
import ElementWrapper from '../ElementWrapper'
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom'
import { insertElement, updateElementType} from '../CanvasWrapper/CanvasWrapper_Action'


class SlateWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
        this.currentElementId = null
    }
    handleEditorChange = (e) => {
        //console.log('Content was updated:', e.target.getContent());
    }

    componentDidMount() {
        // let a = ReactDOM.render(<ElementWrapper slateLevelData={this.state.content} />,document.getElementById('root'))
        // console.log("ddv",a)
    }

    cusf = (e) => {
        if (e.target.attributes.class && e.target.attributes.class.nodeValue === 'addElement') {
            insertElement(e.target.attributes["data-uri"].nodeValue)
        }

        if(e.target.parentNode.attributes["data-uri"]){
            console.log("eeee",e.target.parentNode.attributes["data-uri"].nodeValue);
            this.currentElementId = e.target.parentNode.attributes["data-uri"].nodeValue;
        }
    }

    onEditorClick = (editor) => {
        console.log("onEditorClick >> ")
    };

    updateElementType=()=>{

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.slateLevelData && nextProps.slateLevelData !== this.props.slateLevelData) {

            // let data = `<div>${
            //     nextProps.slateLevelData['urn:pearson:manifest:d9023151-3417-4482-8175-fc965466220e'].contents.bodymatter.map((obj) => {
            //         return "<div>" + obj.html.text + "</div>"
            //     })
            //     } </div>`;
            this.setState({ content: nextProps.slateLevelData })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <TinyMceEditor
                        passedFunction={() => { console.log("hello") }}
                        initialValue={ReactDOMServer.renderToString(<ElementWrapper slateLevelData={this.state.content} />)}
                        value={ReactDOMServer.renderToString(<ElementWrapper slateLevelData={this.state.content} />)}
                        init={{
                            height: 1000,
                            menubar: false,
                            inline: true,
                            fixed_toolbar_container: '#tinymceToolbar',
                            selector: '.tiny-mce-editor-area',
                            plugins: [TinyMceConfig.plugins],
                            toolbar: TinyMceConfig.toolbar,
                            setup: (editor) => {
                                //this.onEditorClick(editor);   

                                // editor.on('ExecCommand', (e) => {
                                //     console.log("clickkedddd=======", e.value);
                                //     updateElementType("urn:pearson:work:8a49e877-144a-4750",e.value)
                                // })

                                editor.on("click", (e) => {
                                    this.cusf(e);
                                    //
                                     //editor.init(this.editorConfig)
                                })

                                let that =this;

                                editor.ui.registry.addSplitButton('formateSelector', {
                                    text: 'Paragraph',
                                    onAction: function (_) {
                                      return false;
                                    },
                                    onItemAction: function (buttonApi, value) {
                                      updateElementType(that.currentElementId,value)
                                    },
                                    fetch: function (callback) {
                                      var items = [
                                        {
                                          type: 'choiceitem',
                                          text: 'Paragrapgh',
                                          value: "p"
                                        },
                                        {
                                          type: 'choiceitem',
                                          text: 'Heading 1',
                                          value: "h1" 
                                        },
                                        {
                                            type: 'choiceitem',
                                            text: 'Heading 2',
                                            value: "h2" 
                                          },
                                          {
                                            type: 'choiceitem',
                                            text: 'Heading 3',
                                            value: "h3" 
                                          },
                                          {
                                            type: 'choiceitem',
                                            text: 'Heading 4',
                                            value: "h4" 
                                          },
                                          {
                                            type: 'choiceitem',
                                            text: 'Heading 5',
                                            value: "h5" 
                                          },
                                          {
                                            type: 'choiceitem',
                                            text: 'Heading 6',
                                            value: "h6" 
                                          },
                                          {
                                            type: 'choiceitem',
                                            text: 'Blockquote',
                                            value: "blockquote" 
                                          },
                                          {
                                            type: 'choiceitem',
                                            text: 'Pullquote',
                                            value: "pullquote" 
                                          },
                                    
                                      ];
                                      callback(items);
                                    }
                                  });
                            }
                        }}
                        content={this.state.content}
                        onChange={this.handleEditorChange}
                        cusf={this.cusf}
                    //onClick={this.cusf}
                    />
                    <div id="react" className="tiny-mce-editor-area mce-edit-focus"></div>
                    <div></div>
                </div>
            </React.Fragment>

        );
    }
}
export default SlateWrapper;