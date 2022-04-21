import { 
    combineReducers, 
    createStore
} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {dataReducer, DataStatesType} from './dataReducer'
import { priceReducer } from './priceReducer'
import {sortReducer, SortStatesType} from './sortReducer'

export type StatesType = {
    data: DataStatesType
    sort: SortStatesType
}

const rootReducer = combineReducers(
    {
        data: dataReducer,
        sort: sortReducer,
        price: priceReducer
    }
)

export const store = createStore(
    rootReducer, 
    composeWithDevTools()
)