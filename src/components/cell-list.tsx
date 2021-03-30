import { Fragment } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';
import './cell-list.css';
const CellList: React.FC = () => {
    const cells = useTypedSelector((state) => {
        return state.cells?.order.map((id) => {
            return state.cells?.data[id];
        });
    });
    const renderedCells = cells?.map((x) => (
        <Fragment key={x!.id}>
            <CellListItem cell={x} />
            <AddCell previousCellId={x!.id} />
        </Fragment>
    ));
    return (
        <div className="cell-list">
            <AddCell forceVisible={cells?.length === 0} previousCellId={null} />
            {renderedCells}
        </div>
    );
};

export default CellList;
