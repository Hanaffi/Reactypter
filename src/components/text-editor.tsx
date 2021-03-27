import MDEditor from '@uiw/react-md-editor';
import { useEffect, useRef, useState } from 'react';
import './text-editor.css';
const TextEditor: React.FC = () => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState('# Header');

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
                    value={text}
                    onChange={(v) => {
                        setText(v || '');
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
                <MDEditor.Markdown source={text} />
            </div>
        </div>
    );
};

export default TextEditor;
