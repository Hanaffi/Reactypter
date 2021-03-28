import { useState, useEffect } from 'react';

import CodeEditor from '../components/code-editor';
import Preview from '../components/preview';
import bundle from '../bundler';
import Resizable from './resizable';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';

interface CodeCellProps {
    cell: Cell | undefined;
}
const CodeCell: React.FC<CodeCellProps> = (props) => {
    const { updateCell } = useActions();
    const [input, setInput] = useState('console.log("Hello World");');
    const [code, setCode] = useState('');
    const [err, setErr] = useState('');
    useEffect(() => {
        let timer: any;

        timer = setTimeout(async () => {
            const output = await bundle(props.cell!.content);
            setErr(output.err);
            setCode(output.code);
        }, 1000);

        return () => {
            // it  will be called after the component rerender
            if (timer) {
                clearTimeout(timer);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.cell!.content]);

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
                            updateCell(props.cell!.id, val);
                        }}
                        initialValue={props.cell!.content}
                    />
                </Resizable>

                <Preview code={code} err={err} />
            </div>
        </Resizable>
    );
};

export default CodeCell;
