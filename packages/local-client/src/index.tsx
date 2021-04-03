import 'bulmaswatch/darkly/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactDOM from 'react-dom';
import CellList from './components/cell-list';
import { Provider } from 'react-redux';
import { store } from './state';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <CellList />
            </div>
        </Provider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
