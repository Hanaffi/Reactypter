import { useEffect } from 'react';
import './code-cell.css';
import CodeEditor from '../components/code-editor';
import Preview from '../components/preview';
import Resizable from './resizable';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';

interface CodeCellProps {
    cell: Cell | undefined;
}
const CodeCell: React.FC<CodeCellProps> = (props) => {
    const cumulativeCode = useTypedSelector((state) => {
        const orderedCells = state!.cells!.order.map(
            (ID) => state!.cells!.data[ID]
        );
        const cumulative_code: string[] = [
            `
            import _React from 'react';
            import _ReactDOM from 'react-dom';

            const show = (value)=>{
                const root =  document.querySelector("#root");
                 
                if(typeof value === 'object'){
                    if(value.$$typeof && value.props){
                        _ReactDOM.render(value,root);
                    } 
                    else{
                        root.innerHTML = JSON.stringify(value);
                    }
                }
                
                else{
                    root.innerHTML = value;
                }
                
            }
        `
        ];
        for (let c of orderedCells) {
            if (c.type === 'code') {
                cumulative_code.push(c.content);
            }
            if (c.id === props!.cell!.id) break;
        }
        return cumulative_code;
    });

    // console.log(cumulativeCode);

    const { updateCell, createBundle } = useActions();
    const bundle = useTypedSelector((state) => {
        return state!.bundles![props.cell!.id];
    });

    useEffect(() => {
        if (!bundle) {
            createBundle(props.cell!.id, cumulativeCode.join('\n'));
            return;
        }
        let timer: any;
        timer = setTimeout(async () => {
            createBundle(props.cell!.id, cumulativeCode.join('\n'));
        }, 1000);

        return () => {
            // it  will be called after the component rerender
            if (timer) {
                clearTimeout(timer);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cumulativeCode.join('\n'), props.cell!.id, createBundle]);

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
                <div className="progress-wrapper">
                    {!bundle || bundle.loading ? (
                        <div className="progress-cover">
                            <progress
                                className="progress is-small is-primary"
                                max="100"
                            >
                                Loading
                            </progress>
                        </div>
                    ) : (
                        <Preview code={bundle.code} err={bundle.err} />
                    )}
                </div>
            </div>
        </Resizable>
    );
};

export default CodeCell;
