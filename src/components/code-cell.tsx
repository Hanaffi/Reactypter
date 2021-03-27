import { useState, useEffect } from 'react';

import CodeEditor from '../components/code-editor';
import Preview from '../components/preview';
import bundle from '../bundler';
import Resizable from './resizable';

const CodeCell = () => {
    const [input, setInput] = useState('console.log("Hello World");');
    const [code, setCode] = useState('');
    useEffect(() => {
        let timer: any;

        timer = setTimeout(async () => {
            const output = await bundle(input);
            setCode(output);
        }, 1000);

        return () => {
            // it  will be called after the component rerender
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [input]);

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

                <Preview code={code} />
            </div>
        </Resizable>
    );
};

export default CodeCell;
