// Interfaces only

import { ActionType } from '../action-types/index';
import { CellTypes } from '../cell';

export type Direction = 'up' | 'down';

export interface MoveCellAction {
    type: ActionType.MOVE_CELL;
    payload: {
        id: string;
        direction: Direction;
    };
}

export interface DeleteCellAction {
    type: ActionType.DELETE_CELL;
    payload: string; //id of the cell
}

export interface InsertCellAction {
    type: ActionType.INSERT_CELL_BEFORE;
    payload: {
        id: string | null;
        type: CellTypes;
    }; //id of the cell
}

export interface UpdateCellAction {
    type: ActionType.UPDATE_CELL;
    payload: {
        id: string;
        content: string;
    };
}

export type Action =
    | MoveCellAction
    | UpdateCellAction
    | InsertCellAction
    | DeleteCellAction;
