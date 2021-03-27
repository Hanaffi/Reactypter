import 'bulmaswatch/superhero/bulmaswatch.min.css';

import { useState } from 'react';
import ReactDOM from 'react-dom';

import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import bundle from './bundler';

const App = () => {
    const [input, setInput] = useState('console.log("Hello World");');
    const [code, setCode] = useState('');

    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
    };

    return (
        <div>
            <CodeEditor
                onChange={(val) => {
                    setInput(val);
                }}
                initialValue='console.log("Hello World");'
            />

            <div>
                <button onClick={onClick}>Submit</button>
            </div>
            <Preview code={code} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
