import { Cell } from '../state';
import CodeCell from './code-cell';
import TextEditor from './text-editor';

interface CellListItemProps {
    cell: Cell | undefined;
}
const CellListItem: React.FC<CellListItemProps> = (props) => {
    let child: JSX.Element;
    if (props.cell!.type === 'code') child = <CodeCell />;
    else {
        child = <TextEditor />;
    }
    return <div>{child}</div>;
};

export default CellListItem;
