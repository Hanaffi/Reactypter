// Interfaces only

import { ActionType } from '../action-types/index';
import { Cell, CellTypes } from '../cell';

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

export interface InsertCellAfterAction {
    type: ActionType.INSERT_CELL_AFTER;
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

export interface BundleStartAction {
    type: ActionType.BUNDLE_START;
    payload: {
        cellId: string;
    };
}
export interface BundleCompleteAction {
    type: ActionType.BUNDLE_COMPLETE;
    payload: {
        cellId: string;
        bundle: {
            code: string;
            err: string;
        };
    };
}
export interface FetchCellsAction {
    type: ActionType.FETCH_CELLS;
}

export interface FetchCellsCompleteAction {
    type: ActionType.FETCH_CELLS_COMPLETE;
    payload: Cell[];
}
export interface FetchCellsErrorAction {
    type: ActionType.FETCH_CELLS_ERROR;
    payload: string;
}
export interface SaveCellsErrorAction {
    type: ActionType.SAVE_CELLS_ERROR;
    payload: string;
}
export type Action =
    | MoveCellAction
    | UpdateCellAction
    | InsertCellAfterAction
    | DeleteCellAction
    | BundleStartAction
    | BundleCompleteAction
    | FetchCellsAction
    | FetchCellsCompleteAction
    | FetchCellsErrorAction
    | SaveCellsErrorAction;
