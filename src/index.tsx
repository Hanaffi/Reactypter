import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as esbuild from 'esbuild-wasm';
import './index.css';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

const App = () => {
    const ref = useRef<any>();
    const iframe = useRef<any>();
    const [input, setInput] = useState('');

    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
        });
    };
    useEffect(() => {
        startService();
    }, []);

    const handleSubmit = async () => {
        if (!ref.current) {
            return;
        }
        iframe.current.srcdoc = html;
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

        // setCode(result.outputFiles[0].text);
        iframe.current.contentWindow.postMessage(
            result.outputFiles[0].text,
            '*'
        );
    };
    const html = `
        <html>
        <head></head>
        <body>
            <div id="root"></div>
            <script>
                window.addEventListener('message' , (e)=>{
                    try{
                        eval(e.data)
                    }
                    catch(err){
                        document.getElementById('root').innerHTML='<div style="color:red;">'+err+'</div>  ' ; 
                        console.error(err);
                    }
                } , false)
            </script>
        </body>
        </html>
    `;

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

            <iframe
                title="preview"
                ref={iframe}
                sandbox="allow-scripts"
                srcDoc={html}
            />
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
