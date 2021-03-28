import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
// import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';
import { Provider } from 'react-redux';
import { store } from './state';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                {/* <CodeCell /> */}
                <TextEditor />
            </div>
        </Provider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
