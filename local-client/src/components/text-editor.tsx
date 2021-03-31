import MDEditor from '@uiw/react-md-editor';
import { useEffect, useRef, useState } from 'react';
import { useActions } from '../hooks/use-actions';
import { Cell } from '../state';
import './text-editor.css';
interface TextEditorProps {
    cell: Cell | undefined;
}
const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
    const [editing, setEditing] = useState(false);
    const { updateCell } = useActions();
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (
                ref.current &&
                event.target &&
                ref.current.contains(event.target as Node)
            ) {
                // console.log('element clicked is inside editor');
            } else {
                // console.log('its not inside');
                setEditing(false);
            }
        };
        document.addEventListener('click', listener, { capture: true });

        return () => {
            document.removeEventListener('click', listener, { capture: true });
        };
    }, []);
    if (editing) {
        return (
            <div className="text-editor" ref={ref}>
                <MDEditor
                    value={cell?.content}
                    onChange={(v) => {
                        updateCell(cell!.id, v || '');
                    }}
                />
            </div>
        );
    }
    return (
        <div
            onClick={() => {
                setEditing(true);
            }}
            className="text-editor card"
        >
            <div className="card-content">
                <MDEditor.Markdown
                    source={(cell?.content as string) || 'Click to Edit'}
                />
            </div>
        </div>
    );
};

export default TextEditor;
