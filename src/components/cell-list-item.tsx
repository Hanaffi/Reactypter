import { Cell } from '../state';
interface CellListItemProps {
    cell: Cell | undefined;
}
const CellListItem: React.FC<CellListItemProps> = (props) => {
    return <div>{props.cell!.id}</div>;
};

export default CellListItem;
