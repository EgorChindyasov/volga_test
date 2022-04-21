import React, {FC} from 'react'
import styled from 'styled-components'

type ButtonType = {
    onClick: (event: React.MouseEvent) => void
    className?: string
    active?: 'active' | null
}

const ButtonStyled = styled.div`
    background: ${props => props.active ? "#3a8839" : "white"};
    color: ${props => props.active ? "white" : "#3a8839"};
    width: 100%;
    height: 50%;
    font-size: 1em;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #3a8839;
    border-radius: 3px;
    cursor: pointer;
`

const Button: FC<ButtonType> = (props) => {
    const {className, onClick, active} = props

    const onMouseOver = (event: React.MouseEvent) => {
        if (!active) {
            event.target.style.color = 'white'
            event.target.style.background = '#3a8839'
        }
    }

    const onMouseLeave = (event: React.MouseEvent) => {
        if (!active) {
            event.target.style.color = '#3a8839'
            event.target.style.background = 'white'
        }
    }

    return (
        <ButtonStyled
            onMouseOver={onMouseOver} 
            onMouseLeave={onMouseLeave}
            className={className}
            onClick={onClick} 
            active={active}>
                {props.children}
        </ ButtonStyled>
    )
}

export default Button