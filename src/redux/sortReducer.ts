import { ApiProduct } from './../data/product'

export type SortStatesType = {
    activeProduct: ApiProduct
}

export type SortActionType = {
	type: string
    value: TypeOfSize | ApiProduct
}

export const defaultStates: SortStatesType = {
    activeProduct: {
        price: '', 
        weight: '', 
        energy: '', 
        size: '', 
        type: '', 
        id: '' 
    }
}

export const sortReducer = (state = defaultStates, action: SortActionType) => {
    switch (action.type) {
        case 'CHOSE_PRODUCT': 
            return {
                ...state,
                activeProduct: action.value 
            }
        default: 
            return state
    }
}