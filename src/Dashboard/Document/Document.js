import React from 'react';
import '../../App.css';
import './document.css';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from "react-router-dom";

export default class Document extends React.Component {

    render() {

        return (
            <div id="document">
                <div id="document-content" contenteditable="true">
                    <h2 id="document-content-title">280 S2 T2</h2>
                    <p id="document-content-main">It is a long established fact that a reader will be distracted by the readable content of a 
                    page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                    normal distribution of letters, as opposed to using 'Content here, content here', making it look 
                    like readable English.
                    <br/><br/>
                    <q>This is awesome!..</q>
                    <br/><br/>
                    <div className="code-contain">
                        <pre className="prettyprint">
                            if apple in fruit:
                                print("Nom nom")
                        </pre>
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
