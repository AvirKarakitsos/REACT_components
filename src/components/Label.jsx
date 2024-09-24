import { useState } from "react"
import styled from "styled-components"

let widthLabel = 55;
let widthToggle = 22;
let slide = widthLabel - widthToggle - 4;

const LabelComponent = styled.label`
    height: 25px;
    width: ${widthLabel}px;
    display: flex;
    align-items: center;
    border: 2px solid red;
    border-radius: 23px;
    background: ${props => props.$isActive ? "grey" : "black"};
    transition: background 500ms 100ms;

    &::after{
        content: "";
        height: 22px;
        width: ${widthToggle}px;
        display: block;
        position: relative;
        left: ${props => props.$isActive ? slide+"px" : "0px"};
        z-index: 50;
        transition: left 500ms;
        background-color: orange;
        border-radius: 50%;
    }
`
const InputComponent = styled.input`
    display: none;
`

function Label() {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <LabelComponent htmlFor="item" $isActive={toggle}></LabelComponent>
            <InputComponent type="checkbox" name="item" id="item" onChange={() => setToggle(value => !value)}/>
            <div>Result: {toggle? " true" : "false"}</div>
        </>
    )
}
  
export default Label