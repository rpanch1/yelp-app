import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
    color: #dc143c; 
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 60px; 
    font-weight: 700; 
    text-align: center; 
    text-transform: uppercase;
`

const StyledDiv = styled.div`
    background-color: #f8f8ff;
    border-radius: 15px;
    padding: 75px; 
`

const Header = () => {
    return (
        <StyledDiv>
            <H1>Businesses In Naperville</H1>
        </StyledDiv>
    )
}

export default Header
