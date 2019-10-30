import React from 'react';
import '../../App.css';
import './document.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from "react-router-dom";

export default class Document extends React.Component {

    render() {
        const codeString = '(num) => num + 1';
        return (
            <div id="document">
                <div id="document-content" contenteditable="true" style={{color: this.props.theme ? '#fff' : '#000'}}>
                    <h2 id="document-content-title">280 S2 T2</h2>
                    <p id="document-content-main">It is a long established fact that a reader will be distracted by the readable content of a 
                    page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                    normal distribution of letters, as opposed to using 'Content here, content here', making it look 
                    like readable English.
                    <br/><br/>
                    <q style={{background: this.props.theme ? '#01193d' : '#ebf3ff', color: this.props.theme ? '#fff' : '#01193d'}}>This is an awesome quote!..</q>
                    <br/><br/>
                    <div className="code-contain" style={{background: '#01193d'}}>
                        <SyntaxHighlighter language="javascript" style={atomOneDark}>
                            {codeString}
                        </SyntaxHighlighter>
                    </div>
                    
                    </p>
                </div>
                <div id="document-widgets">
                    <div class="document-widgets-button"><b>Bold</b></div>
                    <div class="document-widgets-button"><i>Italic</i></div>
                </div>
            </div>
        );
    }
}
