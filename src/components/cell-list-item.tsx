import { Cell } from '../state';
import CodeCell from './code-cell';
import TextEditor from './text-editor';
import ActionBar from './action-bar';
import './cell-list-item.css';
interface CellListItemProps {
    cell: Cell | undefined;
}
const CellListItem: React.FC<CellListItemProps> = (props) => {
    let child: JSX.Element;
    if (props.cell!.type === 'code') child = <CodeCell cell={props.cell} />;
    else {
        child = <TextEditor cell={props.cell} />;
    }
    return (
        <div className="cell-list-item">
            {child}
            <ActionBar id={props.cell!.id} />
        </div>
    );
};

export default CellListItem;
