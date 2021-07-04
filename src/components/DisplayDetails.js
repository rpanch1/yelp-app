import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const Container = styled.div`
    background-color: #f8f8ff;
    padding: 5px; 
    margin: 30px 100px;
    border: 2px solid black;
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 15px;
    border-radius: 8px;
    outline: 0;
    color: black;
`
const H2 = styled.h2`
    color: black; 
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 30px; 
    font-weight: bold; 
    text-align: center; 
    text-transform: uppercase;
`
const Img = styled.img`
    border: 2px solid black;
    height: 300px;
    width: 300px;
    margin: 10px 10px;
`

const DivStyled = styled.div`
    background-color: #f8f8ff;
    padding: 5px; 
    margin: 10px 10px;
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 15px;
    outline: 0;
    color: black;
`

const LabelStyled = styled.label`
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 15px;
    color: black;
    font-weight: bold; 
`

const URL = styled.a`
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 15px;
    color: black;
    font-weight: bold; 
    :hover {
        color: #dc143c;
    }
    ;
`

const Back = styled.div`
    background-color: #dc143c;
    color: #f8f8ff;
    align: center;
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 13px;
    border-radius: 8px;
    padding: 13px 13px;
    outline: 0;
    transition-duration: 0.4s;
    :hover {
        background-color: #dc143c;
        color: #f8f8ff;
        transform: scale(0.96);
    }
    margin: 30px 475px;
    transition-duration: 0.4s;
    :active {
        transform: scale(0.93);
    }
    cursor: default;
    text-transform: uppercase;
    font-weight: bold;
`

const DisplayDetails = ({name, image, phone, rating, url, address}) => {

    let history = useHistory();

    const onClick = async (e) => {
        e.preventDefault()
        history.push("/");
    }
    
    return (
        <Container>
            <H2>{name}</H2>
            <Img src={image}></Img>
            <DivStyled><LabelStyled>Address: </LabelStyled>{address['display_address']}</DivStyled>
            <DivStyled><LabelStyled>Phone Number: </LabelStyled>{phone}</DivStyled>
            <DivStyled><LabelStyled>Yelp Rating: </LabelStyled>{rating}</DivStyled>
            <DivStyled><URL target='_blank' href={url}>Yelp Page</URL></DivStyled>
            <Back onClick={onClick}>Go back</Back>
        </Container>
    )
}

export default DisplayDetails
