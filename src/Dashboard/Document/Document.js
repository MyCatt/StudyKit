import React from 'react';
import '../../App.css';
import './document.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {Editor, EditorState, ContentState, convertFromHTML, RichUtils, CompositeDecorator} from 'draft-js';
import { MobileView } from 'react-device-detect';

import AddListIcon from '../../../src/Icons/addList.png';
import BoldIcon from '../../../src/Icons/bold.png';
import ItalicIcon from '../../../src/Icons/italic.png';
import CodeIcon from '../../../src/Icons/code.png';
import QuoteIcon from '../../../src/Icons/quote.png';
import ToDo from '../../../src/Icons/todo.png';

export default class Document extends React.Component {
    constructor(props) {
        super(props);
        const sampleMarkup = '<h1 className="DraftEditor-content-title">Write a title!</h1> <br/><br/>' 
                           + '<p>02/11/2019</p><br/><pre>dasd</pre>';
        const blocksFromHTML = convertFromHTML(sampleMarkup);
        const state = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
        );
        const HANDLE_REGEX = /\@[\w]+/g;
        const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;
        const CODE_REGEX = /\```[\w|\W|\s|\n|\r|\t]+```/g;

        const styles = {
            handle: {background: '#c4dcff', color: '#000'},
            hashtag: {color: 'blue'},
            code: {background: '#fff', color: '#000', minWidth: '50%'}
        }

        const HandleSpan = (props) => {
            return <span {...props} style={styles.handle}>{props.children}</span>;
        };
          
        const HashtagSpan = (props) => {
            return <span {...props} style={styles.hashtag}>{props.children}</span>;
        };

        const CodeSpan = (props) => {
            return <span {...props} className="code-snip" style={styles.code}>{props.children}</span>;
        };

        function handleStrategy(contentBlock, callback, contentState) {
            findWithRegex(HANDLE_REGEX, contentBlock, callback);
        }

        function hashtagStrategy(contentBlock, callback, contentState) {
            findWithRegex(HASHTAG_REGEX, contentBlock, callback);
        }

        function codeStrategy(contentBlock, callback, contentState) {
            insertCode(CODE_REGEX, contentBlock, callback);
        }

        function findWithRegex(regex, contentBlock, callback) {
            const text = contentBlock.getText();
            let matchArr, start;
            while ((matchArr = regex.exec(text)) !== null) {
                start = matchArr.index;
                callback(start, start + matchArr[0].length);
            }
        }
        function insertCode(regex, contentBlock, callback) {
            const text = contentBlock.getText();
            console.log(blocksFromHTML.contentBlocks);
            let matchArr, start;
            while ((matchArr = regex.exec(text)) !== null) {
                start = matchArr.index;
                callback(start + 3, start + matchArr[0].length - 3);
            }  
        }
        function myBlockStyleFn(contentBlock) {
            const type = contentBlock.getType();
            console.log(type)
            if (type === 'blockquote') {
              return 'superFancyBlockquote';
            }else if (type == "code-block") {
                return 'codeBlock';
            }
          }
        const compositeDecorator = new CompositeDecorator([
            {
              strategy: handleStrategy,
              component: HandleSpan,
            },
            {
              strategy: hashtagStrategy,
              component: HashtagSpan,
            },
            {
                strategy: codeStrategy,
                component: CodeSpan
            }
        ]);
        this.state = {
            editorState: EditorState.createWithContent(state, compositeDecorator)
        };
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this._onRichUtilsClick = this._onRichUtilsClick.bind(this);
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          this.onChange(newState);
          return 'handled';
        }
        return 'not-handled';
    }

    _onRichUtilsClick(type) {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, type));
    }
    

    render() {

        return (
            <div id="document">
                <Editor editorState={this.state.editorState} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand} blockStyleFn={this.myBlockStyleFn}/>
                    <div id="document-widgets">
                        <div class="document-widgets-button" onClick={() => this._onRichUtilsClick("BOLD")}><img src={BoldIcon}></img></div>
                        <div class="document-widgets-button" onClick={() => this._onRichUtilsClick("ITALIC")}><img src={ItalicIcon}></img></div>
                        <div class="document-widgets-button"><img src={AddListIcon}></img></div>
                        <div class="document-widgets-button"><img src={CodeIcon}></img></div>
                        <div class="document-widgets-button"><img src={QuoteIcon}></img></div>
                        <div class="document-widgets-button"><img src={ToDo}></img></div>
                    </div>
            </div>
        );
    }
}
