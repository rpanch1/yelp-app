import React from 'react'
import DisplayBusiness from './DisplayBusiness'
import styled from 'styled-components'

const Div = styled.div`
    background-color: #f8f8ff;
    border-radius: 15px;
    padding: 5px; 
    margin: 85px 300px;
    border: 2px solid black;
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 15px;
    font-weight: bold;
    border-radius: 8px;
    outline: 0;
    color: black;
    
`

const Label = styled.label`
    font-family: 'Open Sans Condensed', sans-serif; 
    text-transform: uppercase;
    font-size: 8px;
    font-weight: bold;
    padding: 3px 10px;
    outline: 0;
    background-color: #f8f8ff;
    color: black;
    margin: 12px;
`

const DisplayBusinesses = ({businessesArr, addBusinessDetails}) => {
    return (
        <Div>
            <Label>click to view details</Label>
            {businessesArr.map((ele) => (
                <DisplayBusiness key={ele.id} eleId={ele.id} eleName={ele.name} addBusinessDetails={addBusinessDetails}></DisplayBusiness>))}
        </Div>
    )
}

export default DisplayBusinesses
