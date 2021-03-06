import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/github';


/**
* @summary - Editor is a React Component that creat the Ace Editor in the DOM. 
* 
*/
class Editor extends Component {

  /**
  * @summary - Component did Update is part of the React lifecycle. When called we focus 
  * the cursor in the Ace Editor Component
  */
  componentDidUpdate() {
    this.refs.aceEditor.editor.focus();
  }

  /**
  * @summary -render(), creates the editor in the DOM
  */
  render() {
    return (
      <div id="editor" >
        <AceEditor ref="aceEditor" width="100%" height="94vh" mode="javascript" theme="github" value={this.props.text} name="ace-editor" className="d-none d-md-block" />
      </div>
    );
  }
}

export default Editor;