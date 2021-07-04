import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const Div = styled.div`
    align: center;
    border: 1px solid black;
    font-family: 'Open Sans Condensed', sans-serif; 
    
    font-size: 13px;
    border-radius: 8px;
    padding: 13px 13px;
    outline: 0;
    background-color: #f8f8ff;
    color: black;
    transition-duration: 0.4s;
    :hover {
        border: 1px solid #dc143c;
        background-color: #dc143c;
        color: #f8f8ff;
        transform: scale(0.96);
    }
    margin: 15px;
    transition-duration: 0.4s;
    :active {
        transform: scale(0.93);
    }
    cursor: default;
`

const DisplayBusiness = ({eleId, eleName, addBusinessDetails}) => {

    let history = useHistory();

    const onClick = async (e) => {
        e.preventDefault()
        await addBusinessDetails(eleId)
        history.push("/details");
    }

    return (
        <Div onClick={onClick}>{eleName}</Div>
    )
}

export default DisplayBusiness
