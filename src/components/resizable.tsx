import { ResizableBox } from 'react-resizable';
import './resizable.css';
interface ResizableProps {
    direction: 'horizontal' | 'vertical';
}
const Resizable: React.FC<ResizableProps> = (props) => {
    return (
        <ResizableBox
            maxConstraints={[Infinity, window.innerHeight * 0.8]}
            minConstraints={[Infinity, window.innerHeight * 0.1]}
            resizeHandles={['s']}
            height={500}
            width={Infinity}
        >
            {props.children}
        </ResizableBox>
    );
};

export default Resizable;
