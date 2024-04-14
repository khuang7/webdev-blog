import React,{ Component } from 'react';
import Prism from 'prismjs';
import './CodeEditor.css';
import dedent from 'dedent';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const code = dedent`    

import React from "react";
import ReactDOM from "react-dom";
function App() {
  return (
    <h1>Hello world</h1>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
`;

class CodeEditor extends React.Component {
  state = { code };

  render() {
    return (
      <Editor
        value={this.state.code}
        onValueChange={code => this.setState({ code })}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    );
  }
}

export default CodeEditor;