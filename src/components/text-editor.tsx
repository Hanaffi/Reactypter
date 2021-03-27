import MDEditor from '@uiw/react-md-editor';
import { useEffect, useRef, useState } from 'react';

const TextEditor: React.FC = () => {
    const [editing, setEditing] = useState(false);
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
            <div ref={ref}>
                <MDEditor />
            </div>
        );
    }
    return (
        <div
            onClick={() => {
                setEditing(true);
            }}
        >
            <MDEditor.Markdown source={'# HEADER'} />
        </div>
    );
};

export default TextEditor;
