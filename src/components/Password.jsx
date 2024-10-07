
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
    position: relative;
    svg {
        position: absolute;
        top: 11px;
        right: 7px;
        z-index: 20;
    }
`

const InputPassword = styled.input`
    width: 200px;
    padding: 10px 30px 10px 2px;  
`

const InputText = styled.input`
    width: 200px;
    padding: 10px 30px 10px 2px;  
    display: ${props => props.$show ? "block" : "none"};
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 10;
`

function Password() {
    const [text, setText] = useState("")
    const [show, setShow] = useState(false)

    return(
        <Container>
            <InputPassword type="password" name="password" id="password" value={text} onChange={(e) => setText(e.target.value)}/>
          
            <FontAwesomeIcon icon={show ? faEyeSlash : faEye} onClick={() => setShow(!show)}/>
          
            <InputText type="text" value={text} onChange={(e) => setText(e.target.value)} $show={show}/>
        </Container>
    )
}

export default Password