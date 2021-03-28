import { Cell } from '../state';
import CodeCell from './code-cell';
import TextEditor from './text-editor';
import ActionBar from './action-bar';

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
        <div>
            <ActionBar id={props.cell!.id} />
            {child}
        </div>
    );
};

export default CellListItem;
