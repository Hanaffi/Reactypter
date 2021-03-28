import { useTypedSelector } from '../hooks/use-typed-selector';

const CellList: React.FC = () => {
    const res = useTypedSelector((state) => {
        return state.cells?.order.map((id) => {
            return state.cells?.data[id];
        });
    });
    console.log(res);
    return <div>xxx</div>;
};

export default CellList;
