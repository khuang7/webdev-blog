import React from "react"
import ReactDOM from "react-dom"
import Prism from "prismjs"
import '../components/CodeEditor.css'


const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim()

class Test extends React.Component {


  render() {
    return (
      <pre className="line-numbers">
        <code className="language-js">
          { code }
        </code>
      </pre>
    )
  }
}

setTimeout(() => Prism.highlightAll(), 0)
export default Test;