import { Action } from '@ngrx/store';
import { ListItem } from '../../../model/list-item.model';

export enum ListActionTypes {
    GET_LIST = '[List] GET_LIST',
    GET_LIST_SUCCESS = '[List] GET_LIST_SUCCESS',
    GET_LIST_FAILURE = '[List] GET_LIST_FAILURE',
    GET_LIST_ITEM = '[List] GET_LIST_ITEM',
    CREATE_LIST_ITEM = '[List] CREATE_LIST_ITEM',
    UPDATE_LIST_ITEM = '[List] UPDATE_LIST_ITEM',
    EDIT_LIST_ITEM = '[List] EDIT_LIST_ITEM',
    DELETE_LIST_ITEM = '[List] DELETE_LIST_ITEM'
}

export class GetList implements Action {
    readonly type = ListActionTypes.GET_LIST;
    constructor(public payload: any = null) { }
}

export class GetListSuccess implements Action {
    readonly type = ListActionTypes.GET_LIST_SUCCESS;
    constructor(public payload: ListItem[]) {}
}

export class GetListFailure implements Action {
    readonly type = ListActionTypes.GET_LIST_FAILURE;
    constructor(public payload: Error | string) {}
}

export class GetListItem implements Action {
    readonly type = ListActionTypes.GET_LIST_ITEM;
    constructor(public payload: number) {}
}

export class CreateListItem implements Action {
    readonly type = ListActionTypes.CREATE_LIST_ITEM;
    constructor(public payload: ListItem) {}
}

export class UpdateListItem implements Action {
    readonly type = ListActionTypes.UPDATE_LIST_ITEM;
    constructor(public payload: ListItem) {}
}

export class EditListItem implements Action {
    readonly type = ListActionTypes.EDIT_LIST_ITEM;
    constructor(public payload: ListItem) {}
}

export class DeleteListItem implements Action {
    readonly type = ListActionTypes.DELETE_LIST_ITEM;
    constructor(public payload: ListItem) {}
}

export type ListActions =
      GetList
    | GetListSuccess
    | GetListFailure
    | GetListItem
    | CreateListItem
    | UpdateListItem
    | EditListItem
    | DeleteListItem;