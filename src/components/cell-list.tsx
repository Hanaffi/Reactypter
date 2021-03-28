import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';

const CellList: React.FC = () => {
    const cells = useTypedSelector((state) => {
        return state.cells?.order.map((id) => {
            return state.cells?.data[id];
        });
    });
    const renderedCells = cells?.map((x) => (
        <>
            <AddCell nextCellId={x!.id} />
            <CellListItem key={x!.id} cell={x} />
        </>
    ));
    return (
        <div>
            {renderedCells}

            <AddCell nextCellId={null} />
        </div>
    );
};

export default CellList;
