import { ListItem } from '../../../model/list-item.model';

export interface ListState {
    data: ReadonlyArray<ListItem>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}

export const initialListState: ListState = {
    // data: [
        //     new ListItem(9999, 'title1', 'description1', false, '2018-12-28', [], 300),
        //     new ListItem(8888, 'title1', 'description2', false, '2018-12-28', [], 300)
        // ]
        // data: [{
            //     id: 8693,
            //     title: 'item from store',
            //     description: 'Est rcitation mollit bor labore ex eiusmod ut est ea voluptate ea nostrud.',
            //     rate: false,
            //     date: '2018-12-28',
            //     authors: [],
            //     duration: 157,
            //     editMode: false
            //   }
            // ]
    data: [],
    loading: false,
    loaded: false,
    error: null
};