import { Fragment } from 'react';
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
        <Fragment key={x!.id}>
            <AddCell nextCellId={x!.id} />
            <CellListItem cell={x} />
        </Fragment>
    ));
    return (
        <div>
            {renderedCells}

            <AddCell nextCellId={null} />
        </div>
    );
};

export default CellList;
