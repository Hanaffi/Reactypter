import { useActions } from '../hooks/use-actions';
import './add-cell.css';

interface AddCellProps {
    nextCellId: string | null;
}
const AddCell: React.FC<AddCellProps> = (props) => {
    const { insertCellBefore } = useActions();
    return (
        <div>
            <button
                onClick={() => {
                    insertCellBefore(props.nextCellId, 'code');
                }}
            >
                Code
            </button>
            <button
                onClick={() => {
                    insertCellBefore(props.nextCellId, 'text');
                }}
            >
                Text
            </button>
        </div>
    );
};

export default AddCell;
