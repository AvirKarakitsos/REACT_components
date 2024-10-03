import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const DivContainer = styled.div`
    height: 400px;
    width: 250px;
    position: relative;
    background-color: black;
    overflow: hidden;
`
const IconOpen = styled.div`
    height: 30px;
    width: 30px;
    display: ${(props) => props.$isActive ? 'none' : "flex"};
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 50%;
    border: 1px solid orange;
    cursor: pointer;
`
const IconClose = styled.div`
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 10px;
    transform: ${(props) => props.$isActive ? 'translateX(0)' : 'translateX(100px)'};
    transition: transform 1500ms ease-out;
    border-radius: 50%;
    background-color: orange;
    cursor: pointer;
`
const List = styled.ul`
    width: 150px;
    position: absolute;
    right: 0;
    top: 50px;
    transform: ${(props) => props.$isActive ? 'translateX(0)' : 'translateX(150px)'};
    transition: transform 1500ms ease-out;
    list-style-type: none;
    border-left: 1px solid white;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
`
const ListElement = styled.li`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid white;
`

function Menu() {
    const [isActive, setIsActive] = useState(false)

    return(
        <DivContainer>
            <IconOpen $isActive={isActive} onClick={() => setIsActive(true)}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </IconOpen>
            <IconClose $isActive={isActive} onClick={() => setIsActive(false)}>X</IconClose>
            <List $isActive={isActive}>
                <ListElement>Home</ListElement>
                <ListElement>Page 1</ListElement>
                <ListElement>Page 2</ListElement>
            </List>
        </DivContainer>
    )
}

export default Menu;