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
    if (props.cell!.type === 'code')
        child = (
            <>
                <div className="action-bar-wrapper">
                    <ActionBar id={props.cell!.id} />
                </div>
                <CodeCell cell={props.cell} />
            </>
        );
    else {
        child = (
            <>
                <TextEditor cell={props.cell} />
                <ActionBar id={props.cell!.id} />
            </>
        );
    }
    return <div className="cell-list-item">{child}</div>;
};

export default CellListItem;
