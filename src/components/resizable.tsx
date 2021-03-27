import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import { useEffect, useState } from 'react';

import './resizable.css';
interface ResizableProps {
    direction: 'horizontal' | 'vertical';
}
const Resizable: React.FC<ResizableProps> = (props) => {
    let resizableProps: ResizableBoxProps;
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        let timer: any;
        const listener = () => {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                setInnerWidth(window.innerWidth);
                setInnerHeight(window.innerHeight);
            }, 400);
        };
        window.addEventListener('resize', listener);

        return () => {
            window.removeEventListener('resize', listener);
        };
    }, []);
    if (props.direction === 'horizontal') {
        resizableProps = {
            maxConstraints: [0.8 * innerWidth, Infinity],
            minConstraints: [0.2 * innerWidth, Infinity],
            resizeHandles: ['e'],
            height: Infinity,
            width: window.innerWidth * 0.75,
            className: 'resize-horizontal'
        };
    } else {
        resizableProps = {
            maxConstraints: [Infinity, innerHeight * 0.8],
            minConstraints: [Infinity, innerHeight * 0.1],
            resizeHandles: ['s'],
            height: 500,
            width: Infinity
        };
    }
    return <ResizableBox {...resizableProps}>{props.children}</ResizableBox>;
};

export default Resizable;
