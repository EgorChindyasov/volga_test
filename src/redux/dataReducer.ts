import {ApiProduct, ApiProductVariant} from './../data/product'

export type DataStatesType = {
	data: ApiProduct
    // activeProduct: ApiProductVariant
}

export type DataActionType = {
	type: string
    value: ApiProduct
}

export const defaultStates = {
	data: {},
    // activeProduct: {}
}

export const dataReducer = (state = defaultStates, action: DataActionType) => {
    switch (action.type) {
            case 'SET':
                return {
                    ...state, 
                    data: action.value
                }
            default: 
                return state
    }
}