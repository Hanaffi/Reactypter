import { useActions } from '../hooks/use-actions';
import './add-cell.css';

interface AddCellProps {
    nextCellId: string | null;
}
const AddCell: React.FC<AddCellProps> = (props) => {
    const { insertCellBefore } = useActions();
    return (
        <div className="add-cell">
            <div className="add-buttons">
                <button
                    className="button is-rounded is-primary is-small"
                    onClick={() => {
                        insertCellBefore(props.nextCellId, 'code');
                    }}
                >
                    <span className="icon is-small">
                        <i className="fas fa-plus"></i>
                    </span>
                    <span>Code</span>
                </button>
                <button
                    className="button is-rounded is-secondary is-small"
                    onClick={() => {
                        insertCellBefore(props.nextCellId, 'text');
                    }}
                >
                    <span className="icon is-small">
                        <i className="fas fa-plus"></i>
                    </span>
                    <span>Text</span>
                </button>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default AddCell;
