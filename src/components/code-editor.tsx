import './code-editor.css';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import React from 'react';

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}
const CodeEditor: React.FC<CodeEditorProps> = (props) => {
    const editorRef = React.useRef<any>();
    const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
        editorRef.current = monacoEditor;
        monacoEditor.onDidChangeModelContent(() => {
            props.onChange(getValue());
        });
        monacoEditor.getModel()?.updateOptions({
            tabSize: 2
        });
    };
    const onFormatClick = () => {
        // Get current value from editor
        const unformatted = editorRef.current.getModel().getValue();
        // Format that value
        const formatted = prettier
            .format(unformatted, {
                parser: 'babel',
                plugins: [parser],
                useTabs: false,
                semi: true,
                singleQuote: true
            })
            .replace(/\n$/, '');
        // Set the formatted value
        editorRef.current.getModel().setValue(formatted);
    };
    return (
        <div className="editor-wrapper">
            <button
                className="button button-format is-primary is-small"
                onClick={onFormatClick}
            >
                Format
            </button>
            <MonacoEditor
                value={props.initialValue}
                editorDidMount={onEditorDidMount}
                language="javascript"
                options={{
                    wordWrap: 'on',
                    minimap: { enabled: false },
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true
                }}
                theme="dark"
                height="500px"
            />
        </div>
    );
};

export default CodeEditor;
