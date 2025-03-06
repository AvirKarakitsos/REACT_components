import { useState } from "react"
import styled from "styled-components"

const ButtonComponent = styled.div`
    display: flex;
    column-gap: 15px;
`

const Container = styled.div`
    height: 50px;
    width: 250px;
    position: relative;
    overflow: hidden;
    border: 1px solid red;
`

const Text = styled.h3`
    position: absolute;
    top: ${props => props.$show ? "0px" : "50px"};
    left: 0;
    transition: top 1000ms ;
`

function ShowUp() {
    const [play,setPlay] = useState(false)

    return(
        <>
            <ButtonComponent>
                <button onClick={() => setPlay(true)}>Play</button>
                <button onClick={() => setPlay(false)}>Reset</button>
            </ButtonComponent>
            <Container>
                <Text $show={play}>Test Title</Text>
            </Container>
        </>
    )
}

export default ShowUp