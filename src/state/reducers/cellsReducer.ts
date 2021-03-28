import produce from 'immer';
import { ActionType } from '../action-types/index';
import { Action } from '../actions';
import { Cell } from '../cell';

interface CellsState {
    loading: boolean;
    error: string | null;
    order: string[];
    data: {
        [key: string]: Cell;
    };
}

const initialState: CellsState = {
    loading: false,
    error: null,
    order: [],
    data: {}
};
const reducer = produce((state: CellsState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.UPDATE_CELL:
            const { id, content } = action.payload;
            state.data[id].content = content;
            return;
        case ActionType.DELETE_CELL:
            delete state.data[action.payload];
            state.order = state.order.filter((id) => id !== action.payload);
            return;

        case ActionType.MOVE_CELL:
            const { direction } = action.payload;
            const index = state.order.findIndex((id) => action.payload.id);
            const targettIndex = direction === 'up' ? index - 1 : index + 1;
            if (targettIndex < 0 || targettIndex >= state.order.length) return;
            state.order[index] = state.order[targettIndex];
            state.order[targettIndex] = action.payload.id;
            return;

        case ActionType.INSERT_CELL_BEFORE:
            return state;
        default:
            return state;
    }
});

export default reducer;
