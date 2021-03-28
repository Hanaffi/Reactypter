import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';

const CellList: React.FC = () => {
    const cells = useTypedSelector((state) => {
        return state.cells?.order.map((id) => {
            return state.cells?.data[id];
        });
    });
    const renderedCells = cells?.map((x) => (
        <CellListItem key={x!.id} cell={x} />
    ));
    return <div>{renderedCells}</div>;
};

export default CellList;
