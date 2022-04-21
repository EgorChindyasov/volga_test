import React, {FC} from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {PriceStatesType} from 'src/redux/priceReducer'

const ProductPriceBlock = styled.div`
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 70%;
    display: ${props => props.price > 0 ? 'flex' : 'none !important'};
    flex-direction: collumn;
    justify-content: center;
    align-items: center;
    background-color: #3a8839;
`

const ProductPrice: FC = () => {
    const currentPrice = useSelector((state: PriceStatesType) => state.price)
    const {price} = currentPrice

    return <ProductPriceBlock 
        price={price}>
            {price}
    </ProductPriceBlock>
} 

export default ProductPrice