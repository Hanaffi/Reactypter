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
      const handleError = (err)=>{
        const  root = document.querySelector('#root');
        root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
        console.error(err);
      };
      window.addEventListener('error' , (event)=>{
        event.preventDefault();
        handleError(event.error);
      })
      window.addEventListener('message', (event) => {
        try {
          eval(event.data);
        } catch (err) {
          handleError(err)
        }
      }, false);
    </script>
  </body>
</html>
`;

interface previewProps {
    code: string;
    err: string;
}
const Preview: React.FC<previewProps> = (props) => {
    const iframe = useRef<any>();

    useEffect(() => {
        iframe.current.srcdoc = html;

        setTimeout(() => {
            iframe.current.contentWindow.postMessage(props.code, '*');
        }, 100);
    }, [props.code]);
    return (
        <div className="preview-wrapper">
            <iframe
                title="preview"
                ref={iframe}
                sandbox="allow-scripts"
                srcDoc={html}
            />

            {props.err && <div className="preview-error">{props.err}</div>}
        </div>
    );
};

export default Preview;
