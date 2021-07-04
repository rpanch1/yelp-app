import React from 'react'
import styled from 'styled-components'
import { useState } from "react";


const Input = styled.input`
    border: 2px solid black;
    font-size: 18px;
    border-radius: 10px;
    height: 35px;
    width: 40%;
    padding: 3px 10px 3px 10px;
    outline: 0;
    background-color: #f8f8ff;
    margin: 12px;
    transition-duration: 0.4s;
    :hover, :focus{
        border: 2px solid #dc143c;
    }
`
const StyleButton = styled.button`
    border: 2px solid black;
    font-family: 'Open Sans Condensed', sans-serif; 
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    border-radius: 8px;
    height: 35px;
    width: 35%;
    padding: 3px 10px;
    outline: 0;
    background-color: #f8f8ff;
    color: black;
    transition-duration: 0.4s;
    :hover {
        border: 3px solid #dc143c;
        background-color: #dc143c;
        color: #f8f8ff
        
    }
    :active {
        transform: scale(0.97);
    }
    margin: 10px;
`

const Search = ({addBusinesses}) => {
    const [text, setText] = useState('')

    const onClick = async (e) => {
        e.preventDefault()

        if(!text) {
            alert('Search is empty!')
            return
        }
        
        addBusinesses(text)
    }

    return (
        <div>
            <Input type='text' placeholder='search...' value={text} onChange={(e) => setText(e.target.value)}></Input><br></br>
            <StyleButton onClick={onClick}>Search</StyleButton>
        </div>
    )
}

export default Search
