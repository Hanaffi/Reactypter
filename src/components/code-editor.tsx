import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}
const CodeEditor: React.FC<CodeEditorProps> = (props) => {
    const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
        monacoEditor.onDidChangeModelContent(() => {
            props.onChange(getValue());
        });
        monacoEditor.getModel()?.updateOptions({
            tabSize: 2
        });
    };
    return (
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
    );
};

export default CodeEditor;
