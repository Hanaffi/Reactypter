import MonacoEditor from '@monaco-editor/react';

const CodeEditor = () => {
    return (
        <MonacoEditor
            language="javascript"
            options={{
                wordWrap: 'on'
            }}
            theme="dark"
            height="500px"
        />
    );
};

export default CodeEditor;
