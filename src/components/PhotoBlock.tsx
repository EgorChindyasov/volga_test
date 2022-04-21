import React, {FC} from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {StatesType} from 'src/redux/store'

const PhotoContainer = styled.div`
    width: 100%;
    height: 100%;
`

const Photo = styled.img`
    width: 100%; 
    height: 100%;
    border-radius: 15px;
`

const PhotoBlock: FC = () => {
    const dataFromStore = useSelector((state: StatesType) => state.data.data)

    return <PhotoContainer>
        <Photo src={dataFromStore.image} />
    </PhotoContainer>
}

export default PhotoBlock