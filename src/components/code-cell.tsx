import { useState } from 'react';

import CodeEditor from '../components/code-editor';
import Preview from '../components/preview';
import bundle from '../bundler';
import Resizable from './resizable';

const CodeCell = () => {
    const [input, setInput] = useState('console.log("Hello World");');
    const [code, setCode] = useState('');
    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
    };
    return (
        <Resizable direction="vertical">
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                <Resizable direction="horizontal">
                    <CodeEditor
                        onChange={(val) => {
                            setInput(val);
                        }}
                        initialValue='console.log("Hello World");'
                    />
                </Resizable>
                {/* <div>
                    <button onClick={onClick}>Submit</button>
                </div> */}
                <Preview code={code} />
            </div>
        </Resizable>
    );
};

export default CodeCell;
