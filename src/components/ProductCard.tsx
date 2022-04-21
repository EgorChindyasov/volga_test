import React, {FC} from 'react'
import styled from 'styled-components'
import PhotoBlock from './PhotoBlock'
import ContentAndSortBlock from './ContentAndSortBlock'

const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 1 auto;
`

const Card = styled.div`
    width:  100%;
    height: 60%;
    display: flex;
    flex-direction: row;
`

const ProductCard: FC = () => {

    return <Block>
        <Card>
            <PhotoBlock />
            <ContentAndSortBlock />
        </Card>
    </Block>
}

export default ProductCard