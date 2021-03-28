// Action creators: returns the action
import { ActionType } from '../action-types';
import { CellTypes } from '../cell';
import {
    Action,
    InsertCellAction,
    UpdateCellAction,
    DeleteCellAction,
    MoveCellAction,
    Direction
} from '../actions';

export const updateCell = (id: string, content: string): UpdateCellAction => {
    return {
        type: ActionType.UPDATE_CELL,
        payload: {
            id,
            content
        }
    };
};

export const deleteCell = (id: string): DeleteCellAction => {
    return {
        type: ActionType.DELETE_CELL,
        payload: id
    };
};

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
    return {
        type: ActionType.MOVE_CELL,
        payload: {
            id,
            direction
        }
    };
};
export const insertCellBefore = (
    id: string,
    cellType: CellTypes
): InsertCellAction => {
    return {
        type: ActionType.INSERT_CELL_BEFORE,
        payload: {
            id,
            type: cellType
        }
    };
};
