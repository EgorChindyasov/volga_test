import React, {FC, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import getApiProduct from './../data/product'
import ProductPrice from './ProductPrice'

const Wrapper = styled.section`
    width: 70%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const App: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        // про BFF в задании нет ни слова, по этому получаем данные напрямую
        dispatch({type: 'SET', value: getApiProduct()})
    }, [])

    return (
        <Wrapper>
            <ProductCard />
            <ProductPrice />
        </Wrapper>
    )
}

export default App