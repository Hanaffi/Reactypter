import React, { useEffect, useRef } from 'react';
import './preview.css';
const html = `
<html>
  <head>
    <style>
      html{
        background-color:white;
      }
    </style>
  
  </head>
  <body>
    <div id="root"></div>
    <script>
      window.addEventListener('message', (event) => {
        try {
          eval(event.data);
        } catch (err) {
          const  root = document.querySelector('#root');
          root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
          console.error(err);
        }
      }, false);
    </script>
  </body>
</html>
`;

interface previewProps {
    code: string;
}
const Preview: React.FC<previewProps> = (props) => {
    const iframe = useRef<any>();

    useEffect(() => {
        iframe.current.srcdoc = html;
        iframe.current.contentWindow.postMessage(props.code, '*');
    }, [props.code]);
    return (
        <div className="preview-wrapper">
            <iframe
                title="preview"
                ref={iframe}
                sandbox="allow-scripts"
                srcDoc={html}
            />
        </div>
    );
};

export default Preview;
