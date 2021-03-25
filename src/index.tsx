import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as esbuild from 'esbuild-wasm';
import './index.css';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

const App = () => {
    const ref = useRef<any>();
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: '/esbuild.wasm'
        });
    };
    useEffect(() => {
        startService();
    }, []);

    const handleSubmit = async () => {
        if (!ref.current) {
            return;
        }

        const result = await ref.current.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [unpkgPathPlugin(), fetchPlugin(input)],
            define: {
                'process.env.NODE_ENV': '"production"',
                global: 'window'
            }
        });

        // console.log(result);

        setCode(result.outputFiles[0].text);
    };

    return (
        <div>
            <textarea
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                value={input}
            ></textarea>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {/* Output */}
            <pre>{code}</pre>
        </div>
    );
};
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
