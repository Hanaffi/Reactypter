import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.css';
interface ResizableProps {
    direction: 'horizontal' | 'vertical';
}
const Resizable: React.FC<ResizableProps> = (props) => {
    let resizableProps: ResizableBoxProps;
    if (props.direction === 'horizontal') {
        resizableProps = {
            maxConstraints: [0.8 * window.innerWidth, Infinity],
            minConstraints: [0.2 * window.innerWidth, Infinity],
            resizeHandles: ['e'],
            height: Infinity,
            width: window.innerWidth * 0.75,
            className: 'resize-horizontal'
        };
    } else {
        resizableProps = {
            maxConstraints: [Infinity, window.innerHeight * 0.8],
            minConstraints: [Infinity, window.innerHeight * 0.1],
            resizeHandles: ['s'],
            height: 500,
            width: Infinity
        };
    }
    return <ResizableBox {...resizableProps}>{props.children}</ResizableBox>;
};

export default Resizable;
