import React, {
    FC, 
    useEffect, 
    useState
} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {ApiProduct, ApiProductVariant} from 'src/data/product'
import {StatesType} from 'src/redux/store'
import Button from './Button'

const ContentAndSortContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`

const Category = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Description = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Dough = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const Size = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const Price = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const WeightAndEnergy = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: start;
`

const WeightBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const EnergyBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
`

const AddBlock = styled.div`
    width: 50%;
    height: 20%;
    align-items: end;
`

const ContentAndSortBlock: FC = () => {
    const dispatch = useDispatch()
    const dataFromStore = useSelector((state: StatesType) => state.data.data)
    const activeProduct = useSelector((state: StatesType) => state.sort.activeProduct)

    const [data, setData] = useState<ApiProduct | undefined>(undefined)
    const [defaultCommonVariant, setDefaultCommonVariant] = useState<ApiProductVariant>()

    useEffect(() => {
        if (Object.keys(dataFromStore).length > 0) {
            setData(dataFromStore)
            const {
                price, 
                weight, 
                energy, 
                size, 
                type, 
                id
            } = dataFromStore

            setDefaultCommonVariant({
                price, 
                weight, 
                energy, 
                size, 
                type, 
                id
            })

            dispatch({
                type: 'CHOSE_PRODUCT',
                value: {
                    price, 
                    weight, 
                    energy, 
                    size, 
                    type, 
                    id    
                }
            })
        }
    }, [dataFromStore])

    const onClickThin = () => {
        const thinVariants = data?.variant.filter(item => item.type == 'thin')
        dispatch({
            type: 'CHOSE_PRODUCT',
            value: thinVariants?.sort((a, b) => a.price - b.price)[0]
        })
    }
    
    const onClickCommon = () => {
        dispatch({
            type: 'CHOSE_PRODUCT',
            value: defaultCommonVariant
        })
    }

    const onClickSize = (event: React.MouseEvent) => {
        const className: string[] = event.target.className.split(/ /g)
        
        if (className.includes(defaultCommonVariant.id)) {
            dispatch({
                type: 'CHOSE_PRODUCT',
                value: defaultCommonVariant
            })
        }

        data?.variant.forEach(item => {
            if (className.includes(item.id)) {
                dispatch({
                    type: 'CHOSE_PRODUCT',
                    value: item
                })
            }
        })
        

    }

    const renderVariantsPizza = () => {
        const {type} = activeProduct
        const variants = []

        if (type == 'common') {
            variants.push(defaultCommonVariant)
        }

        data?.variant.forEach(item => {
            if (item.type == activeProduct.type) {
                variants.push(item)
            }
        })

        return variants.map(variant => {
            let size = ''

            if (variant?.size == 's') {
                size = 'Маленькая'
            } else if (variant?.size == 'm') {
                size = 'Средняя'
            } else {
                size = 'Большая'
            }

            return (
                <Button
                    key={variant?.id}
                    className={variant?.id}
                    onClick={onClickSize}
                    active={activeProduct.price == variant?.price ? 'active' : null}>
                        {size}
                </Button>
            ) 
        })
    }

    const addProduct = () => {
        dispatch({type: 'ADD_PRODUCT', value: activeProduct.price})
    }

    return <ContentAndSortContainer>
        <Category>{data?.category}</Category>
        <Title>{data?.title}</Title>
        <Description>{data?.description}</Description>
        <WeightAndEnergy>
            <WeightBlock>
                {activeProduct.weight} г    
            </WeightBlock>
            <EnergyBlock>
                {activeProduct.energy} ккал    
            </EnergyBlock>
        </WeightAndEnergy>
        <Dough>
            <Button 
                onClick={onClickCommon}
                active={activeProduct.type == 'common' ? 'active' : null}>
                Обычное тесто
            </Button>
            <Button 
                onClick={onClickThin} 
                active={activeProduct.type == 'thin' ? 'active' : null}>
                Тонкое тесто
            </Button>
        </Dough>
        <Size>
            {renderVariantsPizza()}
        </Size>
        <Price>
            <h2>{activeProduct.price} руб</h2>
        </Price>
        <AddBlock>
            <Button onClick={addProduct}>
                Купить
            </Button>
        </AddBlock>
    </ContentAndSortContainer>
}

export default ContentAndSortBlock