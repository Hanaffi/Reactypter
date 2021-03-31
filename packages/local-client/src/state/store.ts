import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { presistMiddleware } from './middleware/presist-middleware';
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk, presistMiddleware)
);
