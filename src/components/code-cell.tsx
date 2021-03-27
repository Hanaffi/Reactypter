import { useState } from 'react';

import CodeEditor from '../components/code-editor';
import Preview from '../components/preview';
import bundle from '../bundler';

const CodeCell = () => {
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

export default CodeCell;
