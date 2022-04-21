export type PriceStatesType = {
    price: number
}

export type PriceActionType = {
	type: string
    value: number
}

export const defaultStates: PriceStatesType = {
    price: 0
}

export const priceReducer = (state = defaultStates, action: PriceActionType) => {
    switch (action.type) {
        case 'ADD_PRODUCT': 
            return {
                ...state,
                price: state.price + action.value 
            }
        default: 
            return state
    }
}